import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '../types';
import {
  createChatMessage,
  createWelcomeMessage,
  type ChatApiMessagePayload,
  type ChatMessage,
  type ClinicAiContext,
} from '../types/chat';
import { sendClinicChatMessage } from '../api/chatApi';

function toApiMessages(messages: ChatMessage[]): ChatApiMessagePayload[] {
  const filtered = messages.filter((m) => m.role === 'user' || m.role === 'assistant');
  const lastIndex = filtered.length - 1;

  return filtered.map((m, index) => {
    const isLast = index === lastIndex;
    const payload: ChatApiMessagePayload = {
      role: m.role,
      content: m.content,
    };
    if (m.imageDataUrl && m.role === 'user' && isLast) {
      payload.image = m.imageDataUrl;
    }
    return payload;
  });
}

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
    async (text: string, imageDataUrl?: string) => {
      const trimmed = text.trim();
      if ((!trimmed && !imageDataUrl) || isLoading) return;

      const userMessage = createChatMessage('user', trimmed, { imageDataUrl });
      const nextMessages = [...messages, userMessage];
      setMessages(nextMessages);
      setIsLoading(true);
      setError(null);

      try {
        const reply = await sendClinicChatMessage({
          locale,
          messages: toApiMessages(nextMessages),
          context,
        });
        setMessages((prev) => [...prev, createChatMessage('assistant', reply)]);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Chat failed';
        setError(message);
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
