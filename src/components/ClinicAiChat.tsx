import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { AnimatePresence, motion } from 'motion/react';
import {
  Bot,
  Loader2,
  MessageCircle,
  RotateCcw,
  SendHorizontal,
  Sparkles,
  X,
} from 'lucide-react';
import type { Locale } from '../types';
import type { ClinicAiContext } from '../types/chat';
import { getChatUiLabels, getQuickPrompts, getWelcomeMessage } from '../types/chat';
import { useClinicAiChat } from '../hooks/useClinicAiChat';
import { openAppointmentBooking } from '../config/links';

interface ClinicAiChatProps {
  locale: Locale;
  context?: ClinicAiContext;
}

const markdownComponents = {
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-brand-text-primary">{children}</strong>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-dark"
    >
      {children}
    </a>
  ),
};

export default function ClinicAiChat({ locale, context }: ClinicAiChatProps) {
  const [open, setOpen] = useState(false);
  const [showWelcomePreview, setShowWelcomePreview] = useState(true);
  const [draft, setDraft] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [usedQuickPrompts, setUsedQuickPrompts] = useState<string[]>([]);
  const labels = getChatUiLabels(locale);
  const quickPrompts = getQuickPrompts(locale);
  const { messages, isLoading, error, sendMessage, resetChat } = useClinicAiChat(locale, context);

  const visibleQuickPrompts = quickPrompts.filter((prompt) => !usedQuickPrompts.includes(prompt));
  const showQuickPrompts = visibleQuickPrompts.length > 0 && !isLoading;

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, isLoading, open]);

  useEffect(() => {
    if (open) {
      setShowWelcomePreview(false);
      inputRef.current?.focus();
    }
  }, [open]);

  const welcomeText = getWelcomeMessage(locale);

  useEffect(() => {
    setShowWelcomePreview(true);
    setUsedQuickPrompts([]);
  }, [locale]);

  const bookingLabel = useMemo(() => {
    if (locale === 'uz') return 'Qabulga yozilish';
    if (locale === 'ru') return 'Записаться';
    return 'Book appointment';
  }, [locale]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const text = draft;
    setDraft('');
    await sendMessage(text);
  };

  const handleQuickPrompt = async (prompt: string) => {
    setUsedQuickPrompts((prev) => (prev.includes(prompt) ? prev : [...prev, prompt]));
    await sendMessage(prompt);
  };

  const handleResetChat = () => {
    resetChat();
    setUsedQuickPrompts([]);
  };

  return (
    <div className="clinic-ai-chat fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-[min(100vw-1.5rem,400px)] h-[min(78vh,620px)] bg-white rounded-2xl shadow-2xl shadow-brand-dark-navy/20 border border-brand-sectiongray flex flex-col overflow-hidden"
            aria-label={labels.title}
          >
            <header className="bg-gradient-to-r from-brand-deep-blue to-brand-dark-navy text-white px-4 py-3.5 flex items-start justify-between gap-3 shrink-0">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/10">
                    <Bot className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h2 className="font-display font-bold text-sm sm:text-base leading-tight">
                      {labels.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-white/75 mt-0.5">{labels.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title={locale === 'uz' ? 'Yangi suhbat' : locale === 'ru' ? 'Новый чат' : 'New chat'}
                  aria-label={locale === 'uz' ? 'Yangi suhbat' : locale === 'ru' ? 'Новый чат' : 'New chat'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={labels.close}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            <div
              ref={listRef}
              className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-brand-offwhite clinic-ai-chat-messages"
            >
              {messages.map((message) => {
                const isUser = message.role === 'user';
                const isWelcome = message.isWelcome === true;
                return (
                  <div
                    key={message.id}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm ${
                        isUser
                          ? 'bg-brand-gold text-white rounded-br-md'
                          : isWelcome
                            ? 'clinic-ai-chat-welcome bg-white border border-brand-sectiongray text-brand-text-primary rounded-bl-md shadow-md'
                            : 'bg-white border border-brand-sectiongray text-brand-text-secondary rounded-bl-md shadow-sm'
                      }`}
                    >
                      {isUser || isWelcome ? (
                        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      ) : (
                        <div className="prose-chat">
                          <ReactMarkdown components={markdownComponents}>
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-white border border-brand-sectiongray text-brand-text-muted text-sm shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-gold" />
                    {labels.thinking}
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
                  {error || labels.error}
                </div>
              )}
            </div>

            {showQuickPrompts && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5 bg-brand-offwhite shrink-0">
                {visibleQuickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleQuickPrompt(prompt)}
                    disabled={isLoading}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border border-brand-sectiongray bg-white hover:border-brand-gold/50 hover:bg-brand-gold/5 text-brand-text-secondary transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            <footer className="border-t border-brand-sectiongray bg-white p-3 shrink-0">
              <button
                type="button"
                onClick={openAppointmentBooking}
                className="w-full mb-2.5 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-brand-gold/10 hover:bg-brand-gold/15 text-brand-gold-dark text-xs font-bold transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {bookingLabel}
              </button>

              <form onSubmit={handleSubmit} className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      if (draft.trim() && !isLoading) {
                        void handleSubmit(event);
                      }
                    }
                  }}
                  rows={1}
                  placeholder={labels.placeholder}
                  disabled={isLoading}
                  className="flex-1 resize-none max-h-28 min-h-[42px] px-3 py-2.5 rounded-xl border border-brand-sectiongray bg-brand-offwhite text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/50 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || isLoading}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  aria-label={labels.send}
                >
                  <SendHorizontal className="w-4 h-4" />
                </button>
              </form>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWelcomePreview && !open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="clinic-ai-chat-welcome-preview w-[min(100vw-2rem,320px)] bg-white border border-brand-sectiongray rounded-2xl rounded-br-md shadow-lg shadow-brand-dark-navy/10 p-3.5 relative"
          >
            <button
              type="button"
              onClick={() => setShowWelcomePreview(false)}
              className="absolute top-2 right-2 p-1 rounded-md text-brand-text-muted hover:text-brand-text-primary hover:bg-brand-offwhite cursor-pointer"
              aria-label={labels.close}
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="text-sm text-brand-text-primary leading-relaxed pr-5">{welcomeText}</p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-2.5 text-xs font-bold text-brand-gold hover:text-brand-gold-dark cursor-pointer"
            >
              {locale === 'uz' ? 'Javob berish →' : locale === 'ru' ? 'Ответить →' : 'Reply →'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="clinic-ai-chat-fab inline-flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-white shadow-lg shadow-brand-gold/30 cursor-pointer transition-colors"
        aria-expanded={open}
        aria-label={open ? labels.close : labels.open}
        whileTap={{ scale: 0.96 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
