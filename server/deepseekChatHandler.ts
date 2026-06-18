import type { Locale } from '../src/types';
import { buildClinicSystemInstruction, type ClinicAiContext } from './clinicAiPrompt';
import { getDeepSeekApiKey, getDeepSeekApiBase, getDeepSeekModel } from './loadEnv';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequestBody {
  locale: Locale;
  messages: ChatMessage[];
  context?: ClinicAiContext;
}

export class ChatApiError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = 'ChatApiError';
    this.status = status;
  }
}

interface DeepSeekChatResponse {
  choices?: Array<{
    message?: { content?: string };
  }>;
  error?: { message?: string };
}

export async function handleDeepSeekChat(
  body: ChatRequestBody,
  projectRoot?: string,
): Promise<string> {
  const apiKey = getDeepSeekApiKey(projectRoot);
  if (!apiKey) {
    throw new ChatApiError('DEEPSEEK_API_KEY is not configured on the server', 503);
  }

  const locale = body.locale ?? 'uz';
  const messages = Array.isArray(body.messages) ? body.messages.slice(-24) : [];

  if (messages.length === 0) {
    throw new ChatApiError('Messages are required', 400);
  }

  const last = messages[messages.length - 1];
  if (last.role !== 'user' || !last.content?.trim()) {
    throw new ChatApiError('Last message must be from user', 400);
  }

  if (last.content.length > 2500) {
    throw new ChatApiError('Message is too long', 400);
  }

  const apiMessages = [
    {
      role: 'system' as const,
      content: buildClinicSystemInstruction(locale, body.context),
    },
    ...messages.map((message) => ({
      role: message.role,
      content: message.content.trim(),
    })),
  ];

  try {
    const response = await fetch(`${getDeepSeekApiBase()}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: getDeepSeekModel(),
        messages: apiMessages,
        temperature: 0.65,
        max_tokens: 1200,
      }),
    });

    const data = (await response.json()) as DeepSeekChatResponse;

    if (!response.ok) {
      throw new ChatApiError(
        data.error?.message || `DeepSeek API error (${response.status})`,
        response.status >= 500 ? 502 : response.status,
      );
    }

    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) {
      throw new ChatApiError('Empty response from AI', 502);
    }

    return text;
  } catch (error) {
    if (error instanceof ChatApiError) throw error;
    const message = error instanceof Error ? error.message : 'DeepSeek request failed';
    throw new ChatApiError(message, 502);
  }
}
