"use client";

import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};

type Toast = Omit<ToasterToast, "id">;

interface ToastContextType {
    toasts: ToasterToast[];
    toast: (props: Toast) => {
        id: string;
        dismiss: () => void;
        update: (props: Partial<ToasterToast>) => void;
    };
    dismiss: (toastId?: string) => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(
    undefined
);

export function useToast() {
    const context = React.useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
