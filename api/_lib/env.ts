const PLACEHOLDER = 'MY_DEEPSEEK_API_KEY';

function clean(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim().replace(/^["']|["']$/g, '').replace(/\r$/, '');
  if (!trimmed || trimmed === PLACEHOLDER) return undefined;
  return trimmed;
}

export function getDeepSeekApiKey(): string | undefined {
  return clean(process.env.DEEPSEEK_API_KEY);
}

export function getDeepSeekModel(): string {
  return clean(process.env.DEEPSEEK_MODEL) ?? 'deepseek-chat';
}

export function getDeepSeekApiBase(): string {
  const base = clean(process.env.DEEPSEEK_API_BASE) ?? 'https://api.deepseek.com';
  return base.replace(/\/$/, '');
}

export function isDeepSeekConfigured(): boolean {
  return Boolean(getDeepSeekApiKey());
}
