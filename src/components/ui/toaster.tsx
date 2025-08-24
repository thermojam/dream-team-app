"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider as ToastPrimitivesProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useEffect } from "react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    toasts.forEach(toast => {
      if(toast.open) {
        const timer = setTimeout(() => {
            const toastElement = document.querySelector(`[data-toast-id="${toast.id}"]`);
            if (toastElement) {
                toastElement.setAttribute('data-state', 'closed');
                setTimeout(() => dismiss(toast.id), 300);
            } else {
                dismiss(toast.id)
            }
        }, toast.duration || 5000);
        timers.push(timer);
      }
    })

    return () => {
        timers.forEach(clearTimeout);
    }

  }, [toasts, dismiss]);

  return (
    <ToastPrimitivesProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} data-toast-id={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose onClick={() => dismiss(id)}/>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastPrimitivesProvider>
  )
}
