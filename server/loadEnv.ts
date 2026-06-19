import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const DEEPSEEK_PLACEHOLDER_KEY = 'MY_DEEPSEEK_API_KEY';

export const DEFAULT_DEEPSEEK_MODEL = 'deepseek-chat';

export const DEFAULT_DEEPSEEK_API_BASE = 'https://api.deepseek.com';

let envLoaded = false;

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

/** Minimal .env parser — dotenv is avoided (breaks Vercel esbuild bundle). */
function parseEnvFileContent(content: string): Record<string, string> {
  const result: Record<string, string> = {};

  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;

    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key) result[key] = value;
  }

  return result;
}

function parseEnvFile(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) return {};
  try {
    return parseEnvFileContent(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return {};
  }
}

function applyEnvRecord(record: Record<string, string>, override: boolean): void {
  for (const [key, value] of Object.entries(record)) {
    if (value === undefined || value === '') continue;
    if (override || process.env[key] === undefined || process.env[key] === '') {
      process.env[key] = value;
    }
  }
}

function readDeepSeekKeyFromLocalSecrets(roots: string[]): string | undefined {
  for (const root of roots) {
    const secretsPath = path.join(root, 'server', 'secrets.local.ts');
    if (!fs.existsSync(secretsPath)) continue;

    try {
      const content = fs.readFileSync(secretsPath, 'utf8');
      const match = content.match(
        /DEEPSEEK_API_KEY\s*=\s*(['"`])([\s\S]*?)\1/,
      );
      if (!match?.[2]) continue;

      const key = normalizeEnvValue(match[2]);
      if (key && key !== DEEPSEEK_PLACEHOLDER_KEY) {
        process.env.DEEPSEEK_API_KEY = key;
        return key;
      }
    } catch {
      // ignore
    }
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
    applyEnvRecord(
      Object.fromEntries(
        Object.entries(extra).filter(([, value]) => value !== undefined && value !== ''),
      ) as Record<string, string>,
      true,
    );
  }

  if (envLoaded && !extra) return;

  const roots = getProjectRoots(preferredRoot);

  for (const root of roots) {
    for (const filename of ['.env', '.env.local']) {
      const filePath = path.join(root, filename);
      const parsed = parseEnvFile(filePath);
      if (Object.keys(parsed).length > 0) {
        applyEnvRecord(parsed, false);
      }
    }
  }

  readDeepSeekKeyFromLocalSecrets(roots);
  readDeepSeekKeyFromFiles(roots);

  envLoaded = true;
}

export function getDeepSeekModel(): string {
  loadProjectEnv();
  const configured = process.env.DEEPSEEK_MODEL?.trim();
  return configured ? normalizeEnvValue(configured) : DEFAULT_DEEPSEEK_MODEL;
}

export function getDeepSeekApiBase(): string {
  loadProjectEnv();
  const configured = process.env.DEEPSEEK_API_BASE?.trim();
  const base = configured ? normalizeEnvValue(configured) : DEFAULT_DEEPSEEK_API_BASE;
  return base.replace(/\/$/, '');
}

export function getDeepSeekApiKey(preferredRoot?: string): string | undefined {
  loadProjectEnv(undefined, preferredRoot);

  const raw = process.env.DEEPSEEK_API_KEY?.trim();
  if (raw) {
    const key = normalizeEnvValue(raw);
    if (key && key !== DEEPSEEK_PLACEHOLDER_KEY) return key;
  }

  const roots = getProjectRoots(preferredRoot);
  return readDeepSeekKeyFromLocalSecrets(roots) ?? readDeepSeekKeyFromFiles(roots);
}

export function isDeepSeekConfigured(preferredRoot?: string): boolean {
  return Boolean(getDeepSeekApiKey(preferredRoot));
}
