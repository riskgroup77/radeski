import type { Locale } from '../types';

export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
  isWelcome?: boolean;
}

export interface ClinicAiContext {
  serviceSummary?: string;
  doctorSummary?: string;
  articlesSummary?: string;
}

export function createChatMessage(role: ChatRole, content: string, isWelcome = false): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    createdAt: Date.now(),
    isWelcome,
  };
}

export function createWelcomeMessage(locale: Locale): ChatMessage {
  return createChatMessage('assistant', getWelcomeMessage(locale), true);
}

export function getWelcomeMessage(locale: Locale): string {
  if (locale === 'uz') {
    return "Assalomu alaykum! Men Radeski klinikasi AI yordamchisiman. Teri salomatligi, xizmatlar, narxlar yoki qabulga yozilish bo'yicha savollaringizga javob beraman.";
  }
  if (locale === 'ru') {
    return 'Здравствуйте! Я AI-ассистент клиники Radeski. Отвечу на вопросы о коже, услугах, ценах и записи на приём.';
  }
  return 'Hello! I am the Radeski clinic AI assistant. Ask me about skin health, services, prices, or booking an appointment.';
}

export function getQuickPrompts(locale: Locale): string[] {
  if (locale === 'uz') {
    return [
      'Qanday xizmatlar bor?',
      'Qabulga qanday yozilaman?',
      'BBL terapiya nima?',
      'Klinika manzili va telefon',
    ];
  }
  if (locale === 'ru') {
    return [
      'Какие услуги есть?',
      'Как записаться на приём?',
      'Что такое BBL-терапия?',
      'Адрес и телефон клиники',
    ];
  }
  return [
    'What services do you offer?',
    'How do I book an appointment?',
    'What is BBL therapy?',
    'Clinic address and phone',
  ];
}

export function getChatUiLabels(locale: Locale) {
  if (locale === 'uz') {
    return {
      title: 'Radeski AI yordamchi',
      subtitle: '24/7 savollaringizga javob',
      placeholder: 'Savolingizni yozing...',
      send: 'Yuborish',
      thinking: 'Javob tayyorlanmoqda...',
      error: 'Javob olishda xatolik. Qayta urinib ko\'ring.',
      close: 'Yopish',
      open: 'AI chat',
      powered: 'DeepSeek AI',
    };
  }
  if (locale === 'ru') {
    return {
      title: 'Radeski AI-ассистент',
      subtitle: 'Ответы на ваши вопросы 24/7',
      placeholder: 'Напишите ваш вопрос...',
      send: 'Отправить',
      thinking: 'Готовлю ответ...',
      error: 'Ошибка при получении ответа. Попробуйте снова.',
      close: 'Закрыть',
      open: 'AI чат',
      powered: 'DeepSeek AI',
    };
  }
  return {
    title: 'Radeski AI Assistant',
    subtitle: 'Answers to your questions 24/7',
    placeholder: 'Type your question...',
    send: 'Send',
    thinking: 'Preparing answer...',
    error: 'Could not get a reply. Please try again.',
    close: 'Close',
    open: 'AI chat',
    powered: 'DeepSeek AI',
  };
}
