import { GoogleGenAI } from '@google/genai';
import type { Locale } from '../src/types';
import { buildClinicSystemInstruction, type ClinicAiContext } from './clinicAiPrompt';
import { getGeminiApiKey, getGeminiModel } from './loadEnv';

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

const MODEL = getGeminiModel();

export async function handleGeminiChat(body: ChatRequestBody): Promise<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new ChatApiError(
      'GEMINI_API_KEY is not configured on the server',
      503,
    );
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

  const ai = new GoogleGenAI({ apiKey });

  const contents = messages.map((message) => ({
    role: message.role === 'assistant' ? ('model' as const) : ('user' as const),
    parts: [{ text: message.content.trim() }],
  }));

  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        systemInstruction: buildClinicSystemInstruction(locale, body.context),
        temperature: 0.65,
        maxOutputTokens: 1200,
      },
    });

    const text = response.text?.trim();
    if (!text) {
      throw new ChatApiError('Empty response from AI', 502);
    }
    return text;
  } catch (error) {
    if (error instanceof ChatApiError) throw error;
    const message = error instanceof Error ? error.message : 'Gemini request failed';
    throw new ChatApiError(message, 502);
  }
}
