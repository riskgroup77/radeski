import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

dotenv.config({ path: path.join(rootDir, '.env') });
dotenv.config({ path: path.join(rootDir, '.env.local'), override: true });

export const GEMINI_PLACEHOLDER_KEY = 'MY_GEMINI_API_KEY';

/** Default model — gemini-2.0-flash was shut down June 2026 */
export const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash';

export function getGeminiModel(): string {
  const configured = process.env.GEMINI_MODEL?.trim().replace(/^["']|["']$/g, '');
  return configured || DEFAULT_GEMINI_MODEL;
}

export function getGeminiApiKey(): string | undefined {
  const raw = process.env.GEMINI_API_KEY?.trim();
  if (!raw) return undefined;

  const key = raw.replace(/^["']|["']$/g, '');
  if (!key || key === GEMINI_PLACEHOLDER_KEY) return undefined;
  return key;
}

export function isGeminiConfigured(): boolean {
  return Boolean(getGeminiApiKey());
}
