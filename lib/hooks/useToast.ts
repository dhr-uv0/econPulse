'use client'

import * as React from 'react'

type ToastVariant = 'default' | 'success' | 'error'

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

interface ToastState {
  toasts: Toast[]
}

let count = 0
const listeners: Array<(state: ToastState) => void> = []
let state: ToastState = { toasts: [] }

function dispatch(toast: Toast) {
  state = { toasts: [toast, ...state.toasts].slice(0, 5) }
  listeners.forEach((l) => l(state))

  const duration = toast.duration ?? 4000
  if (duration > 0) {
    setTimeout(() => dismiss(toast.id), duration)
  }
}

function dismiss(id: string) {
  state = { toasts: state.toasts.filter((t) => t.id !== id) }
  listeners.forEach((l) => l(state))
}

export function toast(opts: Omit<Toast, 'id'>) {
  dispatch({ id: String(++count), ...opts })
}

toast.success = (title: string, description?: string) =>
  toast({ title, description, variant: 'success' })
toast.error = (title: string, description?: string) =>
  toast({ title, description, variant: 'error' })

export function useToast() {
  const [toastState, setToastState] = React.useState<ToastState>(state)

  React.useEffect(() => {
    listeners.push(setToastState)
    return () => {
      const idx = listeners.indexOf(setToastState)
      if (idx > -1) listeners.splice(idx, 1)
    }
  }, [])

  return { toasts: toastState.toasts, toast, dismiss }
}
