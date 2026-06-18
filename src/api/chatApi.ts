import type { Locale } from '../types';
import type { ChatMessage, ClinicAiContext } from '../types/chat';
import { ApiError } from './client';

export interface ChatApiResponse {
  reply: string;
}

async function parseChatResponse(res: Response): Promise<ChatApiResponse> {
  const text = await res.text();
  let data: { reply?: string; error?: string };
  try {
    data = JSON.parse(text) as { reply?: string; error?: string };
  } catch {
    throw new ApiError(res.status, text || 'Invalid server response');
  }

  if (!res.ok) {
    throw new ApiError(res.status, data.error ?? data, data.error || `HTTP ${res.status}`);
  }

  if (!data.reply) {
    throw new ApiError(502, 'Empty AI reply');
  }

  return { reply: data.reply };
}

export async function sendClinicChatMessage(payload: {
  locale: Locale;
  messages: Pick<ChatMessage, 'role' | 'content'>[];
  context?: ClinicAiContext;
}): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await parseChatResponse(res);
  return data.reply;
}

export async function checkChatHealth(): Promise<{ aiConfigured: boolean }> {
  try {
    const res = await fetch('/api/chat/health');
    if (!res.ok) return { aiConfigured: false };
    const data = (await res.json()) as { aiConfigured?: boolean };
    return { aiConfigured: Boolean(data.aiConfigured) };
  } catch {
    return { aiConfigured: false };
  }
}
