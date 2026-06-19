/** Vercel + local dev uchun chat yadro moduli (api/ papkasida emas). */

import {
  buildImageContextText,
  describeSkinImage,
  isVisionConfigured,
} from './visionDescribe.js';

const PLACEHOLDER = 'MY_DEEPSEEK_API_KEY';
const MAX_IMAGE_DATA_URL = 1_200_000;

const CLINIC_FACTS = {
  name: 'Radeski Skin & Aesthetic Clinic',
  phone: '+998 (73) 200-73-73',
  address: "Farg'ona, O'zbekiston Ovozi ko'chasi, 1A-bino",
  hours: 'Dushanba–Shanba 08:00–18:00',
  booking: 'https://hipolink.net/radeskiskinclinicuz',
  specialties:
    'Dermatologiya, dermatoonkologiya, trixologiya, apparat kosmetologiya, lazer, BBL, PhotoFinder, inyeksion kosmetologiya, podologiya, laboratoriya',
};

export class ChatApiError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = 'ChatApiError';
    this.status = status;
  }
}

function cleanEnv(value) {
  if (!value) return undefined;
  const trimmed = String(value).trim().replace(/^["']|["']$/g, '').replace(/\r$/, '');
  if (!trimmed || trimmed === PLACEHOLDER) return undefined;
  return trimmed;
}

export function getDeepSeekApiKey() {
  return cleanEnv(process.env.DEEPSEEK_API_KEY);
}

export function getDeepSeekModel() {
  return cleanEnv(process.env.DEEPSEEK_MODEL) || 'deepseek-chat';
}

export function getDeepSeekApiBase() {
  const base = cleanEnv(process.env.DEEPSEEK_API_BASE) || 'https://api.deepseek.com';
  return base.replace(/\/$/, '');
}

export function isDeepSeekConfigured() {
  return Boolean(getDeepSeekApiKey());
}

function factsBlock(locale) {
  if (locale === 'uz') {
    return `
Klinika: ${CLINIC_FACTS.name}
Manzil: ${CLINIC_FACTS.address}
Telefon: ${CLINIC_FACTS.phone}
Ish vaqti: ${CLINIC_FACTS.hours}
Onlayn qabul: ${CLINIC_FACTS.booking}
Yo'nalishlar: ${CLINIC_FACTS.specialties}`;
  }
  if (locale === 'ru') {
    return `
Клиника: ${CLINIC_FACTS.name}
Адрес: ${CLINIC_FACTS.address}
Телефон: ${CLINIC_FACTS.phone}
График: ${CLINIC_FACTS.hours}
Онлайн-запись: ${CLINIC_FACTS.booking}
Направления: ${CLINIC_FACTS.specialties}`;
  }
  return `
Clinic: ${CLINIC_FACTS.name}
Address: ${CLINIC_FACTS.address}
Phone: ${CLINIC_FACTS.phone}
Hours: ${CLINIC_FACTS.hours}
Online booking: ${CLINIC_FACTS.booking}
Services: ${CLINIC_FACTS.specialties}`;
}

function imageAnalysisRules(locale) {
  if (locale === 'uz') {
    return `
RASM TAHLILI QOIDALARI:
- Agar xabarda "[Teri rasmi — dastlabki tahlil]" bo'lsa, undagi tavsif asosida javob bering.
- Mumkin bo'lgan dermatologik yo'nalishlarni taxminiy ayting — bu TASHXIS EMAS.
- Aniq tashxis faqat shifokor ko'rigida qo'yiladi deb eslatib o'ting.
- Radeski klinikasida qaysi mutaxassis/xizmat mos kelishini tavsiya qiling.
- Har doim telefon (${CLINIC_FACTS.phone}) va Hipolink (${CLINIC_FACTS.booking}) ni ko'rsating.
- Javob bo'limlari: Ko'rinish | Ehtimoliy sabablar | Klinikaga murojaat.`;
  }
  if (locale === 'ru') {
    return `
ПРАВИЛА АНАЛИЗА ФОТО:
- Если в сообщении есть "[Фото кожи — предварительный анализ]", отвечайте на основе описания.
- Укажите возможные направления — это НЕ диагноз.
- Точный диагноз ставит только врач на приёме.
- Рекомендуйте услуги Radeski, телефон (${CLINIC_FACTS.phone}) и Hipolink (${CLINIC_FACTS.booking}).
- Структура: Что видно | Возможные причины | Обращение в клинику.`;
  }
  return `
IMAGE ANALYSIS RULES:
- If the message contains "[Skin photo — preliminary analysis]", answer from that description.
- Suggest possible directions — NOT a diagnosis.
- Only an in-person visit confirms diagnosis.
- Recommend Radeski services, phone (${CLINIC_FACTS.phone}) and Hipolink (${CLINIC_FACTS.booking}).
- Structure: What is visible | Possible causes | Visit the clinic.`;
}

function buildClinicSystemInstruction(locale, context) {
  const langRule =
    locale === 'uz'
      ? "Javoblarni FAQAT o'zbek tilida yozing (lotin yozuvi)."
      : locale === 'ru'
        ? 'Отвечайте ТОЛЬКО на русском языке.'
        : 'Reply ONLY in English.';

  const role =
    locale === 'uz'
      ? `Siz "${CLINIC_FACTS.name}" klinikasining rasmiy AI yordamchisisiz.`
      : locale === 'ru'
        ? `Вы официальный AI-ассистент клиники "${CLINIC_FACTS.name}".`
        : `You are the official AI assistant of ${CLINIC_FACTS.name}.`;

  const extra = [
    context?.serviceSummary ? `Xizmatlar: ${context.serviceSummary}` : '',
    context?.doctorSummary ? `Shifokorlar: ${context.doctorSummary}` : '',
    context?.articlesSummary ? `Maqolalar: ${context.articlesSummary}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return `${role}\n${langRule}\n${factsBlock(locale)}\n${imageAnalysisRules(locale)}${extra ? `\n\nKONTEKST:\n${extra}` : ''}`;
}

function validateImageDataUrl(image) {
  if (!image || typeof image !== 'string') return undefined;
  const trimmed = image.trim();
  if (!trimmed.startsWith('data:image/')) {
    throw new ChatApiError('Invalid image format', 400);
  }
  if (trimmed.length > MAX_IMAGE_DATA_URL) {
    throw new ChatApiError('Image is too large', 400);
  }
  return trimmed;
}

function visionNotConfiguredMessage(locale) {
  if (locale === 'ru') {
    return 'Анализ фото не настроен. Добавьте GEMINI_API_KEY или VISION_API_KEY в переменные окружения.';
  }
  if (locale === 'en') {
    return 'Photo analysis is not configured. Add GEMINI_API_KEY or VISION_API_KEY to environment variables.';
  }
  return 'Rasm tahlili sozlanmagan. GEMINI_API_KEY yoki VISION_API_KEY ni muhit o\'zgaruvchilariga qo\'shing.';
}

async function buildTextUserContent(message, locale, isLatestUserMessage) {
  const text = message.content?.trim() || '';
  const image = validateImageDataUrl(message.image);

  if (!image) {
    return text || null;
  }

  if (!isLatestUserMessage) {
    if (locale === 'ru') return text || '[Ранее отправлено фото кожи]';
    if (locale === 'en') return text || '[Skin photo was sent earlier]';
    return text || '[Avval teri rasmi yuborilgan]';
  }

  if (!isVisionConfigured()) {
    throw new ChatApiError(visionNotConfiguredMessage(locale), 503);
  }

  try {
    const description = await describeSkinImage(image, locale, text);
    return buildImageContextText(locale, text, description);
  } catch (error) {
    if (error instanceof ChatApiError) throw error;
    const detail = error instanceof Error ? error.message : 'Vision failed';
    throw new ChatApiError(
      locale === 'uz'
        ? `Rasmni tahlil qilib bo'lmadi: ${detail}`
        : locale === 'ru'
          ? `Не удалось проанализировать фото: ${detail}`
          : `Could not analyze photo: ${detail}`,
      502,
    );
  }
}

export function parseChatBody(raw) {
  let body = raw;

  if (typeof body === 'string' && body.trim()) {
    body = JSON.parse(body);
  }

  if (Buffer.isBuffer(body)) {
    body = JSON.parse(body.toString('utf8'));
  }

  if (!body || typeof body !== 'object') {
    throw new ChatApiError('Request body is required', 400);
  }

  return body;
}

export async function handleDeepSeekChat(body) {
  const apiKey = getDeepSeekApiKey();
  if (!apiKey) {
    throw new ChatApiError('DEEPSEEK_API_KEY is not configured on the server', 503);
  }

  const locale = body.locale === 'ru' || body.locale === 'en' ? body.locale : 'uz';
  const messages = Array.isArray(body.messages) ? body.messages.slice(-24) : [];

  if (messages.length === 0) {
    throw new ChatApiError('Messages are required', 400);
  }

  const lastIndex = messages.length - 1;
  const last = messages[lastIndex];
  if (last.role !== 'user') {
    throw new ChatApiError('Last message must be from user', 400);
  }

  const lastHasContent = Boolean(last.content?.trim() || last.image);
  if (!lastHasContent) {
    throw new ChatApiError('Last message must include text or image', 400);
  }

  if ((last.content?.length ?? 0) > 2500) {
    throw new ChatApiError('Message is too long', 400);
  }

  const apiMessages = [{ role: 'system', content: buildClinicSystemInstruction(locale, body.context) }];

  for (let i = 0; i < messages.length; i += 1) {
    const message = messages[i];

    if (message.role === 'assistant') {
      apiMessages.push({ role: 'assistant', content: message.content?.trim() || '' });
      continue;
    }

    const isLatestUser = i === lastIndex;
    const content = await buildTextUserContent(message, locale, isLatestUser);
    if (!content) continue;
    apiMessages.push({ role: 'user', content });
  }

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
      max_tokens: 1400,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ChatApiError(
      data?.error?.message || `DeepSeek API error (${response.status})`,
      response.status >= 500 ? 502 : response.status,
    );
  }

  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new ChatApiError('Empty response from AI', 502);
  }

  return text;
}

export function getChatHealthPayload() {
  return {
    ok: true,
    aiConfigured: isDeepSeekConfigured(),
    visionConfigured: isVisionConfigured(),
    model: getDeepSeekModel(),
  };
}
