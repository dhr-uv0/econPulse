'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { X, Send, TrendingUp, Loader2, ChevronDown, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME = `Hi! I'm **Eco-Clippy** — your economics encyclopedia and tutor.

I can explain any economic concept from first principles, draw ASCII diagrams, help you understand exam questions, and guide you through any topic in the curriculum.

What would you like to understand today?`

export function EcoClippy() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus input when opened
  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, minimized])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          context: pathname,
        }),
      })

      if (!res.ok) throw new Error('API error')
      const { content } = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I had trouble connecting. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }, [input, loading, messages, pathname])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Render markdown-lite: bold, code, line breaks
  function renderContent(text: string) {
    const lines = text.split('\n')
    return lines.map((line, i) => {
      const bold = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      const code = bold.replace(/`(.+?)`/g, '<code class="bg-[var(--muted)] px-1 py-0.5 rounded text-xs font-mono">$1</code>')
      return (
        <span key={i}>
          <span dangerouslySetInnerHTML={{ __html: code }} />
          {i < lines.length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <div data-tour="eco-clippy" className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Chat panel */}
      {open && (
        <div
          className={cn(
            'card-surface flex flex-col shadow-2xl transition-all duration-200 origin-bottom-right',
            minimized
              ? 'h-12 w-64 overflow-hidden'
              : 'h-[480px] w-80 sm:w-96'
          )}
          role="dialog"
          aria-label="Eco-Clippy Economics Assistant"
          aria-modal="false"
        >
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2.5 bg-[var(--navy-900,#0f1729)] rounded-t-[var(--radius-lg)]">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent)]">
              <TrendingUp className="h-3.5 w-3.5 text-[var(--accent-fg)]" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-white leading-none">Eco-Clippy</div>
              <div className="text-[10px] text-white/50 leading-none mt-0.5">Economics Encyclopedia</div>
            </div>
            <button
              onClick={() => setMinimized(!minimized)}
              className="p-1 text-white/60 hover:text-white transition-colors rounded"
              aria-label={minimized ? 'Expand' : 'Minimize'}
            >
              {minimized ? <ChevronDown className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={() => { setOpen(false); setMinimized(false) }}
              className="p-1 text-white/60 hover:text-white transition-colors rounded"
              aria-label="Close assistant"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      'max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'ml-auto bg-[var(--accent)] text-[var(--accent-fg)] rounded-br-sm'
                        : 'bg-[var(--muted)] text-[var(--fg)] rounded-bl-sm'
                    )}
                  >
                    {renderContent(msg.content)}
                  </div>
                ))}
                {loading && (
                  <div className="flex items-center gap-2 bg-[var(--muted)] rounded-xl rounded-bl-sm px-3 py-2 w-fit">
                    <Loader2 className="h-3.5 w-3.5 text-[var(--muted-fg)] animate-spin" />
                    <span className="text-xs text-[var(--muted-fg)]">Thinking…</span>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick prompts */}
              {messages.length === 1 && (
                <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                  {[
                    'Explain supply & demand',
                    'What is GDP?',
                    'How does the multiplier work?',
                    'Draw a PPF diagram',
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => { setInput(prompt); inputRef.current?.focus() }}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] text-[var(--muted-fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="border-t border-[var(--border)] p-2 flex gap-2 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about economics…"
                  className="flex-1 resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors max-h-24"
                  rows={1}
                  aria-label="Message Eco-Clippy"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  size="icon-sm"
                  variant="gold"
                  aria-label="Send message"
                >
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </>
          )}
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => { setOpen(!open); setMinimized(false) }}
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-200',
          'bg-[var(--navy-900,#0f1729)] hover:scale-105 active:scale-95',
          open ? 'rotate-0' : 'animate-pulse-glow'
        )}
        aria-label={open ? 'Close Eco-Clippy' : 'Open Eco-Clippy Economics Assistant'}
        aria-expanded={open}
      >
        <TrendingUp className="h-5 w-5 text-[var(--accent)]" strokeWidth={2.5} />
      </button>
    </div>
  )
}
