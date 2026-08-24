'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 up to `target` over `duration` ms (ease-out cubic).
 * Meant for dashboard stat tiles that load once per page view — it restarts
 * whenever `target` changes, not on every render.
 */
export function useCountUp(target: number, duration = 800): number {
  const [value, setValue] = useState(0)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [target, duration])

  return value
}
