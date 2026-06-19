import {
  ChatApiError,
  handleDeepSeekChat as handleChatCore,
  parseChatBody as parseChatBodyCore,
} from './vercelChatCore.js';
import type { Locale } from '../src/types';
import type { ClinicAiContext } from './clinicAiPrompt';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

export interface ChatRequestBody {
  locale: Locale;
  messages: ChatMessage[];
  context?: ClinicAiContext;
}

export { ChatApiError };

export function parseChatBody(raw: unknown): ChatRequestBody {
  return parseChatBodyCore(raw) as ChatRequestBody;
}

export async function handleDeepSeekChat(
  body: ChatRequestBody,
  _projectRoot?: string,
): Promise<string> {
  return handleChatCore(body);
}
