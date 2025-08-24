'use client';

import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import * as React from 'react';
import {ToastContext} from '@/hooks/use-toast';
import type {ToastActionElement, ToastProps} from '@/components/ui/toast';

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 5000;

type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};

let count = 0;

function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}

type Action =
    | { type: 'ADD_TOAST'; toast: ToasterToast }
    | { type: 'UPDATE_TOAST'; toast: Partial<ToasterToast> }
    | { type: 'DISMISS_TOAST'; toastId?: string }
    | { type: 'REMOVE_TOAST'; toastId?: string };

interface State {
    toasts: ToasterToast[];
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === action.toast.id ? {...t, ...action.toast} : t
                ),
            };
        case 'DISMISS_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === action.toastId || action.toastId === undefined
                        ? {...t, open: false}
                        : t
                ),
            };
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {...state, toasts: []};
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== action.toastId),
            };
    }
};


type Toast = Omit<ToasterToast, 'id'>;

export function ToastProvider({children}: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(reducer, {toasts: []});

    React.useEffect(() => {
        const timers = new Map<string, NodeJS.Timeout>();
        state.toasts.forEach((t) => {
            if (t.open && !timers.has(t.id)) {
                const timer = setTimeout(() => {
                    dispatch({type: 'DISMISS_TOAST', toastId: t.id});
                }, t.duration || TOAST_REMOVE_DELAY);
                timers.set(t.id, timer);
            }
        });
        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [state.toasts]);

    const toast = React.useCallback((props: Toast) => {
        const id = genId();
        const update = (props: Partial<ToasterToast>) => {
            dispatch({type: 'UPDATE_TOAST', toast: {...props, id}});
        };
        const dismiss = () => {
            dispatch({type: 'DISMISS_TOAST', toastId: id});
        };

        dispatch({
            type: 'ADD_TOAST',
            toast: {
                ...props,
                id,
                open: true,
                onOpenChange: (open) => {
                    if (!open) {
                        dismiss();
                    }
                },
            },
        });

        return {id, dismiss, update};
    }, []);

    const dismiss = React.useCallback((toastId?: string) => {
        dispatch({type: 'DISMISS_TOAST', toastId});
    }, []);

    const value = React.useMemo(() => ({...state, toast, dismiss}), [state, toast, dismiss]);

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    );
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </head>
        <body className="font-body antialiased">
        <ToastProvider>
            <div className="flex min-h-screen w-full flex-col">
                <Header/>
                <main className="flex-1 bg-gradient-to-r from-blue-400/50 to-blue-500/10 border-2 border-blue-100">
                    {children}
                </main>
                <Footer/>
            </div>
            <Toaster/>
        </ToastProvider>
        </body>
        </html>
    );
}
