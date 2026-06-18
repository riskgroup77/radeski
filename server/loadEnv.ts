import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);

export const DEEPSEEK_PLACEHOLDER_KEY = 'MY_DEEPSEEK_API_KEY';

export const DEFAULT_DEEPSEEK_MODEL = 'deepseek-chat';

export const DEFAULT_DEEPSEEK_API_BASE = 'https://api.deepseek.com';

function stripQuotes(value: string): string {
  return value.replace(/^["']|["']$/g, '');
}

function normalizeEnvValue(value: string): string {
  return stripQuotes(value.trim()).replace(/\r$/, '');
}

function getProjectRoots(preferredRoot?: string): string[] {
  const roots = new Set<string>();

  if (preferredRoot) {
    roots.add(path.resolve(preferredRoot));
  }

  try {
    const fromModule = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
    roots.add(fromModule);
  } catch {
    // ignore
  }

  roots.add(process.cwd());

  return [...roots];
}

function parseEnvFile(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) return {};
  try {
    return dotenv.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return {};
  }
}

function readDeepSeekKeyFromLocalSecrets(): string | undefined {
  try {
    const mod = require('./secrets.local.ts') as { DEEPSEEK_API_KEY?: string };
    const raw = mod.DEEPSEEK_API_KEY;
    if (!raw) return undefined;
    const key = normalizeEnvValue(raw);
    if (key && key !== DEEPSEEK_PLACEHOLDER_KEY) {
      process.env.DEEPSEEK_API_KEY = key;
      return key;
    }
  } catch {
    // secrets.local.ts mavjud emas — o'tkazib yuboriladi
  }
  return undefined;
}

function readDeepSeekKeyFromFiles(roots: string[]): string | undefined {
  for (const root of roots) {
    for (const filename of ['.env.local', '.env']) {
      const parsed = parseEnvFile(path.join(root, filename));
      const raw = parsed.DEEPSEEK_API_KEY;
      if (!raw) continue;

      const key = normalizeEnvValue(raw);
      if (key && key !== DEEPSEEK_PLACEHOLDER_KEY) {
        process.env.DEEPSEEK_API_KEY = key;
        return key;
      }
    }
  }
  return undefined;
}

/** Load `.env` / `.env.local` from project root (safe to call multiple times). */
export function loadProjectEnv(
  extra?: Record<string, string | undefined>,
  preferredRoot?: string,
): void {
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value !== undefined && value !== '') {
        process.env[key] = value;
      }
    }
  }

  for (const root of getProjectRoots(preferredRoot)) {
    const envPath = path.join(root, '.env');
    const localPath = path.join(root, '.env.local');

    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath, override: false });
    }
    if (fs.existsSync(localPath)) {
      dotenv.config({ path: localPath, override: false });
    }
  }

  readDeepSeekKeyFromLocalSecrets();
  readDeepSeekKeyFromFiles(getProjectRoots(preferredRoot));
}

loadProjectEnv();

export function getDeepSeekModel(): string {
  const configured = process.env.DEEPSEEK_MODEL?.trim();
  return configured ? normalizeEnvValue(configured) : DEFAULT_DEEPSEEK_MODEL;
}

export function getDeepSeekApiBase(): string {
  const configured = process.env.DEEPSEEK_API_BASE?.trim();
  const base = configured ? normalizeEnvValue(configured) : DEFAULT_DEEPSEEK_API_BASE;
  return base.replace(/\/$/, '');
}

export function getDeepSeekApiKey(preferredRoot?: string): string | undefined {
  const raw = process.env.DEEPSEEK_API_KEY?.trim();
  if (raw) {
    const key = normalizeEnvValue(raw);
    if (key && key !== DEEPSEEK_PLACEHOLDER_KEY) return key;
  }

  const fromLocal = readDeepSeekKeyFromLocalSecrets();
  if (fromLocal) return fromLocal;

  return readDeepSeekKeyFromFiles(getProjectRoots(preferredRoot));
}

export function isDeepSeekConfigured(preferredRoot?: string): boolean {
  return Boolean(getDeepSeekApiKey(preferredRoot));
}
