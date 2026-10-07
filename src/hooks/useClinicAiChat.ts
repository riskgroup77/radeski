import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '../types';
import {
  createChatMessage,
  createWelcomeMessage,
  type ChatMessage,
  type ClinicAiContext,
} from '../types/chat';
import { sendClinicChatMessage } from '../api/chatApi';
import { getChatUiLabels } from '../types/chat';
import { ApiError } from '../api/client';

export function useClinicAiChat(locale: Locale, context?: ClinicAiContext) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [createWelcomeMessage(locale)]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const localeRef = useRef(locale);

  useEffect(() => {
    if (localeRef.current === locale) return;
    localeRef.current = locale;
    setMessages([createWelcomeMessage(locale)]);
    setError(null);
  }, [locale]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMessage = createChatMessage('user', trimmed);
      const nextMessages = [...messages, userMessage];
      setMessages(nextMessages);
      setIsLoading(true);
      setError(null);

      try {
        const reply = await sendClinicChatMessage({
          locale,
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
          context,
        });
        setMessages((prev) => [...prev, createChatMessage('assistant', reply)]);
      } catch (err) {
        // Never show raw server/provider errors to patients — explain and offer the phone.
        const labels = getChatUiLabels(locale);
        const status = err instanceof ApiError ? err.status : 0;
        setError(status === 429 ? labels.tooManyMessages : labels.unavailable);
      } finally {
        setIsLoading(false);
      }
    },
    [context, isLoading, locale, messages],
  );

  const resetChat = useCallback(() => {
    setMessages([createWelcomeMessage(locale)]);
    setError(null);
  }, [locale]);

  const apiMessages = useMemo(
    () => messages.filter((m) => m.role === 'user' || m.role === 'assistant'),
    [messages],
  );

  return {
    messages: apiMessages,
    isLoading,
    error,
    sendMessage,
    resetChat,
  };
}
