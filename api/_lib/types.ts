export type ChatLocale = 'uz' | 'ru' | 'en';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ClinicAiContext {
  serviceSummary?: string;
  doctorSummary?: string;
  articlesSummary?: string;
}

export interface ChatRequestBody {
  locale: ChatLocale;
  messages: ChatMessage[];
  context?: ClinicAiContext;
}
