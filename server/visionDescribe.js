/** Teri rasmini matn tavsifga aylantirish (DeepSeek faqat text qabul qiladi). */

function cleanEnv(value) {
  if (!value) return undefined;
  const trimmed = String(value).trim().replace(/^["']|["']$/g, '').replace(/\r$/, '');
  return trimmed || undefined;
}

function visionConfig() {
  const geminiKey = cleanEnv(process.env.GEMINI_API_KEY);
  const visionKey = cleanEnv(process.env.VISION_API_KEY);
  const apiKey = visionKey || geminiKey;

  if (!apiKey) return null;

  const baseUrl = (
    cleanEnv(process.env.VISION_BASE_URL) ||
    (geminiKey && !visionKey
      ? 'https://generativelanguage.googleapis.com/v1beta/openai'
      : 'https://api.openai.com/v1')
  ).replace(/\/$/, '');

  const model =
    cleanEnv(process.env.VISION_MODEL) ||
    (geminiKey && !visionKey ? 'gemini-2.0-flash' : 'gpt-4o-mini');

  return { apiKey, baseUrl, model };
}

export function isVisionConfigured() {
  return Boolean(visionConfig());
}

function describePrompt(locale, userText) {
  const note = userText?.trim() ? `\nFoydalanuvchi qo'shimcha izohi: ${userText.trim()}` : '';

  if (locale === 'ru') {
    return `Вы — помощник дерматолога. Опишите видимые признаки на фото кожи (локализация, цвет, форма, воспаление, шелушение, сыпь, рубцы, родинки и т.д.). Не ставьте диагноз — только объективное описание и возможные направления (акне, экzema, пигментация, купероз и т.д.).${note ? `\nКомментарий пользователя: ${userText.trim()}` : ''}`;
  }
  if (locale === 'en') {
    return `You assist a dermatology clinic. Describe visible skin findings objectively (location, color, shape, inflammation, dryness, rash, scars, moles, etc.). Do not diagnose — suggest possible directions only (acne, eczema, pigmentation, rosacea, etc.).${userText?.trim() ? `\nUser note: ${userText.trim()}` : ''}`;
  }
  return `Siz dermatologiya klinikasi yordamchisisiz. Rasmdagi teri belgilarini obyektiv tasvirlang (joylashuv, rang, shakl, yallig'lanish, quruqlik, toshma, chandiq, xol va h.k.). Tashxis qo'ymang — faqat ehtimoliy yo'nalishlarni ayting (akne, ekzema, pigmentatsiya, kuperoz va h.k.).${note}`;
}

export async function describeSkinImage(imageDataUrl, locale, userText) {
  const config = visionConfig();
  if (!config) {
    throw new Error('VISION_NOT_CONFIGURED');
  }

  const endpoint = `${config.baseUrl}/chat/completions`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: describePrompt(locale, userText) },
            { type: 'image_url', image_url: { url: imageDataUrl } },
          ],
        },
      ],
      max_tokens: 900,
      temperature: 0.2,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || `Vision API error (${response.status})`;
    throw new Error(message);
  }

  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new Error('Empty vision response');
  }

  return text;
}

export function buildImageContextText(locale, userText, imageDescription) {
  const userPart = userText?.trim() || '';

  if (locale === 'ru') {
    return `[Фото кожи — предварительный анализ]\n${imageDescription}${userPart ? `\n\nВопрос/комментарий пациента: ${userPart}` : ''}\n\nДайте понятный ответ, укажите возможные направления (не диагноз), порекомендуйте услуги Radeski, телефон +998 (73) 200-73-73 и запись: https://hipolink.net/radeskiskinclinicuz`;
  }
  if (locale === 'en') {
    return `[Skin photo — preliminary analysis]\n${imageDescription}${userPart ? `\n\nPatient question/note: ${userPart}` : ''}\n\nReply clearly, suggest possible directions (not a diagnosis), recommend Radeski services, phone +998 (73) 200-73-73 and booking: https://hipolink.net/radeskiskinclinicuz`;
  }
  return `[Teri rasmi — dastlabki tahlil]\n${imageDescription}${userPart ? `\n\nBemor savoli/izohi: ${userPart}` : ''}\n\nTushunarli javob bering, ehtimoliy yo'nalishlarni ayting (tashxis emas), Radeski xizmatlari, telefon +998 (73) 200-73-73 va yozilish: https://hipolink.net/radeskiskinclinicuz`;
}
