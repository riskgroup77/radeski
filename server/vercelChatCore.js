/** Vercel + local dev uchun chat yadro moduli (api/ papkasida emas). */

const PLACEHOLDER = 'MY_DEEPSEEK_API_KEY';

const CLINIC_FACTS = {
  name: 'Radeski Skin & Aesthetic Clinic',
  phone: '+998 (73) 200-73-73',
  address: "Farg'ona, O'zbekiston Ovozi ko'chasi, 1A-bino",
  hours: 'Dushanba–Shanba 08:00–18:00',
  booking: 'https://hipolink.net/radeskiskinclinicuz',
  specialties:
    'Dermatologiya, dermatoonkologiya, trixologiya, apparatli kosmetologiya, lazer, IPL, dermatoskopiya, inyeksion kosmetologiya, podologiya, laboratoriya',
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

/** Limits for anything the browser sends — the endpoint is public. */
const MAX_HISTORY_MESSAGES = 20;
const MAX_USER_MESSAGE_CHARS = 2500;
const MAX_ASSISTANT_MESSAGE_CHARS = 4000;
const CONTEXT_LIMITS = { serviceSummary: 2400, doctorSummary: 1000, articlesSummary: 1400 };

function cleanText(value, maxLength) {
  if (typeof value !== 'string') return '';
  // Drop control characters (keep newlines/tabs) and cap the length.
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, maxLength);
}

/**
 * The page sends a short catalogue summary as context. Only the three known fields are
 * accepted, as plain capped strings, so a caller cannot smuggle extra instructions or
 * oversized payloads into the system prompt.
 */
function sanitizeContext(context) {
  const result = {};
  if (!context || typeof context !== 'object') return result;
  for (const [key, limit] of Object.entries(CONTEXT_LIMITS)) {
    const text = cleanText(context[key], limit);
    if (text) result[key] = text;
  }
  return result;
}

/** Only user/assistant turns with text survive; system or tool roles from the client are dropped. */
function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .map((message) => ({
      role: message.role,
      content: cleanText(
        message.content,
        message.role === 'user' ? MAX_USER_MESSAGE_CHARS + 1 : MAX_ASSISTANT_MESSAGE_CHARS,
      ),
    }))
    .filter((message) => message.content)
    .slice(-MAX_HISTORY_MESSAGES);
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
      ? `Siz "${CLINIC_FACTS.name}" klinikasining rasmiy AI yordamchisisiz. Bemorlarga teri salomatligi, xizmatlar, qabul va klinika haqida aniq, iliq va professional javob berasiz.`
      : locale === 'ru'
        ? `Вы официальный AI-ассистент клиники "${CLINIC_FACTS.name}". Помогаете пациентам с вопросами о коже, услугах, записи и клинике — точно, дружелюбно и профессионально.`
        : `You are the official AI assistant of ${CLINIC_FACTS.name}. Help visitors with skin health, services, appointments, and clinic information — warmly and professionally.`;

  const rules =
    locale === 'uz'
      ? `
QOIDALAR:
- Aniq va qisqa javob bering (kerak bo'lsa ro'yxat va bosqichlar bilan).
- Tashxis qo'ymang va dori buyurmang — shifokor ko'rigi tavsiya qiling.
- Narxlar taxminiy bo'lishi mumkin; aniq narx uchun qabulga yo'naltiring.
- Qabul uchun Hipolink havolasini yoki telefonni eslatib o'ting.`
      : locale === 'ru'
        ? `
ПРАВИЛА:
- Отвечайте чётко и по делу (списки и шаги при необходимости).
- Не ставьте диагноз и не назначайте лекарства — направляйте на приём.
- Цены могут быть ориентировочными; точную стоимость уточняет врач.
- Для записи предлагайте Hipolink или телефон клиники.`
        : `
RULES:
- Be clear and concise (use lists/steps when helpful).
- Do not diagnose or prescribe medication — recommend a doctor visit.
- Prices may be indicative; exact quotes come from consultation.
- For booking, mention Hipolink or the clinic phone.`;

  const safeContext = sanitizeContext(context);
  const extra = [
    safeContext.serviceSummary ? `Xizmatlar: ${safeContext.serviceSummary}` : '',
    safeContext.doctorSummary ? `Shifokorlar: ${safeContext.doctorSummary}` : '',
    safeContext.articlesSummary ? `Maqolalar: ${safeContext.articlesSummary}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return `${role}\n${langRule}\n${factsBlock(locale)}\n${rules}${extra ? `\n\nKONTEKST:\n${extra}` : ''}`;
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
  const locale = body.locale === 'ru' || body.locale === 'en' ? body.locale : 'uz';
  const messages = sanitizeMessages(body.messages);

  if (messages.length === 0) {
    throw new ChatApiError('Messages are required', 400);
  }

  const last = messages[messages.length - 1];
  if (last.role !== 'user') {
    throw new ChatApiError('Last message must be from user', 400);
  }

  if (last.content.length > MAX_USER_MESSAGE_CHARS) {
    throw new ChatApiError('Message is too long', 400);
  }

  const apiKey = getDeepSeekApiKey();
  if (!apiKey) {
    throw new ChatApiError('DEEPSEEK_API_KEY is not configured on the server', 503);
  }

  const apiMessages = [
    { role: 'system', content: buildClinicSystemInstruction(locale, body.context) },
    ...messages,
  ];

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

  const data = await response.json();

  if (!response.ok) {
    // Keep provider details (balance, keys, request ids) in the server log, not in the page.
    console.error('[chat] DeepSeek error', response.status, data?.error?.message);
    throw new ChatApiError(
      response.status === 429 ? 'AI is busy' : 'AI assistant is temporarily unavailable',
      503,
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
    model: getDeepSeekModel(),
  };
}
