'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { X, Send, TrendingUp, Loader2, ChevronDown, Minus, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  streaming?: boolean
}

const WELCOME = `Hi! I'm **Eco-Clippy** — your economics tutor and encyclopedia.

I can explain any concept from first principles, draw ASCII diagrams, run through calculations step-by-step, and generate practice questions with mark schemes.

What would you like to understand today?`

const QUICK_PROMPTS = [
  'Explain supply & demand',
  'What is GDP?',
  'Draw a PPF diagram',
  'How does the multiplier work?',
]

const FOLLOW_UP_ACTIONS = [
  { label: '📊 Draw a diagram', prompt: 'Can you draw an ASCII diagram for that?' },
  { label: '🌍 Real-world example', prompt: 'Give me a vivid real-world example of that.' },
  { label: '📝 Quiz me', prompt: 'Give me a practice exam question on that topic with a mark scheme.' },
  { label: '🎯 Examiner tips', prompt: 'What are the key examiner tips and common mistakes for this topic?' },
]

// Block-level markdown renderer: headers, bullets, numbered lists, code blocks, bold, inline code
function MarkdownContent({ text }: { text: string }) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="my-1.5 rounded-md bg-black/30 p-2 text-[11px] font-mono overflow-x-auto whitespace-pre text-emerald-300">
          {codeLines.join('\n')}
        </pre>
      )
      i++
      continue
    }

    // H2 header
    if (line.startsWith('## ')) {
      elements.push(
        <div key={i} className="mt-2.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] opacity-80">
          {line.slice(3)}
        </div>
      )
      i++
      continue
    }

    // H3 header
    if (line.startsWith('### ')) {
      elements.push(
        <div key={i} className="mt-2 mb-0.5 text-xs font-semibold text-[var(--fg)]">
          {line.slice(4)}
        </div>
      )
      i++
      continue
    }

    // Bullet list item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <div key={i} className="flex gap-1.5 leading-snug">
          <span className="mt-0.5 text-[var(--accent)] shrink-0">•</span>
          <span className="text-sm">{renderInline(line.slice(2))}</span>
        </div>
      )
      i++
      continue
    }

    // Numbered list item
    const numMatch = line.match(/^(\d+)\. (.*)/)
    if (numMatch) {
      elements.push(
        <div key={i} className="flex gap-1.5 leading-snug">
          <span className="shrink-0 text-[var(--accent)] text-xs font-mono mt-0.5">{numMatch[1]}.</span>
          <span className="text-sm">{renderInline(numMatch[2])}</span>
        </div>
      )
      i++
      continue
    }

    // Empty line → spacer
    if (line.trim() === '') {
      elements.push(<div key={i} className="h-1.5" />)
      i++
      continue
    }

    // Regular paragraph line
    elements.push(
      <div key={i} className="text-sm leading-relaxed">
        {renderInline(line)}
      </div>
    )
    i++
  }

  return <div className="space-y-0.5">{elements}</div>
}

function renderInline(text: string): React.ReactNode {
  // Split on **bold** and `code` patterns
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="font-semibold text-[var(--fg)]">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={idx} className="bg-black/25 px-1 py-0.5 rounded text-[11px] font-mono text-emerald-300">{part.slice(1, -1)}</code>
    }
    return part
  })
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[var(--muted-fg)] animate-bounce"
          style={{ animationDelay: `${i * 150}ms`, animationDuration: '900ms' }}
        />
      ))}
    </div>
  )
}

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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, minimized])

  // Auto-resize textarea
  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 96) + 'px'
  }

  const sendMessage = useCallback(async (overrideText?: string) => {
    const text = (overrideText ?? input).trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const assistantPlaceholder: Message = { role: 'assistant', content: '', streaming: true }

    setMessages((prev) => [...prev, userMsg, assistantPlaceholder])
    setInput('')
    if (inputRef.current) inputRef.current.style.height = 'auto'
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Strip leading assistant messages (the WELCOME placeholder) — Anthropic requires messages to start with a user turn
          messages: [...messages, userMsg]
            .filter((_, i, arr) => {
              const firstUserIdx = arr.findIndex((m) => m.role === 'user')
              return i >= firstUserIdx
            })
            .map((m) => ({ role: m.role, content: m.content })),
          context: pathname,
        }),
      })

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}))
        throw new Error(errJson.error || `Request failed (${res.status})`)
      }
      if (!res.body) throw new Error('No response body')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: accumulated, streaming: true },
        ])
      }

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: accumulated, streaming: false },
      ])
    } catch (err) {
      const raw = err instanceof Error ? err.message : ''
      const isNetwork = raw.startsWith('Failed to fetch') || raw.includes('NetworkError') || raw.includes('network')
      const content = isNetwork
        ? "Sorry, I couldn't connect. Check your internet connection and try again."
        : raw || "Something went wrong. Please try again."
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content, streaming: false },
      ])
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [input, loading, messages, pathname])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  function clearChat() {
    setMessages([{ role: 'assistant', content: WELCOME }])
  }

  const lastMsg = messages[messages.length - 1]
  const showFollowUps =
    !loading &&
    lastMsg?.role === 'assistant' &&
    !lastMsg.streaming &&
    messages.length > 1

  return (
    <div data-tour="eco-clippy" className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div
          className={cn(
            'card-surface flex flex-col shadow-2xl transition-all duration-200 origin-bottom-right',
            minimized
              ? 'h-12 w-64 overflow-hidden'
              : 'h-[520px] w-[calc(100vw-2rem)] sm:w-[400px]'
          )}
          role="dialog"
          aria-label="Eco-Clippy Economics Assistant"
          aria-modal="false"
        >
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2.5 bg-[var(--navy-900,#0f1729)] rounded-t-[var(--radius-lg)] shrink-0">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent)]">
              <TrendingUp className="h-3.5 w-3.5 text-[var(--accent-fg)]" strokeWidth={2.5} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-white leading-none">Eco-Clippy</div>
              <div className="text-[10px] text-white/50 leading-none mt-0.5">Economics Tutor & Encyclopedia</div>
            </div>
            {!minimized && (
              <button
                onClick={clearChat}
                className="p-1 text-white/40 hover:text-white/80 transition-colors rounded"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <RefreshCw className="h-3 w-3" />
              </button>
            )}
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
              <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0">
                {messages.map((msg, i) => (
                  <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                    <div
                      className={cn(
                        'max-w-[88%] rounded-xl px-3 py-2 leading-relaxed',
                        msg.role === 'user'
                          ? 'bg-[var(--accent)] text-[var(--accent-fg)] rounded-br-sm text-sm'
                          : 'bg-[var(--muted)] text-[var(--fg)] rounded-bl-sm'
                      )}
                    >
                      {msg.role === 'assistant' && msg.streaming && msg.content === '' ? (
                        <TypingDots />
                      ) : msg.role === 'assistant' ? (
                        <MarkdownContent text={msg.content} />
                      ) : (
                        <span className="text-sm">{msg.content}</span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Follow-up action chips */}
                {showFollowUps && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {FOLLOW_UP_ACTIONS.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => sendMessage(action.prompt)}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] text-[var(--muted-fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Quick prompts on welcome screen */}
              {messages.length === 1 && (
                <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] text-[var(--muted-fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="border-t border-[var(--border)] p-2 flex gap-2 items-end shrink-0">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about economics…"
                  className="flex-1 resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors overflow-hidden"
                  rows={1}
                  aria-label="Message Eco-Clippy"
                />
                <Button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  size="icon-sm"
                  variant="gold"
                  aria-label="Send message"
                >
                  {loading ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => { setOpen(!open); setMinimized(false) }}
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200',
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
