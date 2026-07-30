import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// RTL's auto-cleanup relies on a global `afterEach` (as provided by Jest, or
// by Vitest's `test.globals` option). We import `describe`/`it`/`afterEach`
// explicitly instead of enabling globals, so register cleanup by hand —
// without it, DOM from one test's render() leaks into the next test.
afterEach(() => {
  cleanup()
})

// jsdom doesn't implement ResizeObserver, but recharts' <ResponsiveContainer>
// requires one to exist at all (even a no-op) or it throws on mount.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverStub
