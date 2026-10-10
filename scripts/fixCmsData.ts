/**
 * Fixes data stored in the CMS (admin panel) that the code cannot fix by itself:
 *
 *   1. Russian words typed with mixed Latin/Cyrillic letters ("Кuperoz", "лifting",
 *      "Андrogenная") in services and articles — Russian searches cannot match them.
 *   2. Service section title "Apparatli kosmetologiyasi" -> "Apparatli kosmetologiya".
 *   3. Video durations stored as "0:00" -> the real length (public/video-thumbs/index.json).
 *
 * Saves through the same payload builders the admin panel uses, re-reads every record after
 * saving and stops if anything other than the intended text changed.
 *
 *   npx tsx scripts/fixCmsData.ts            # dry run: lists what would change
 *   npx tsx scripts/fixCmsData.ts --apply    # writes the changes
 *
 * Credentials: ADMIN_USERNAME / ADMIN_PASSWORD from the environment (.env), otherwise asked
 * for in the terminal (the password is not echoed and never stored).
 */
import 'dotenv/config';
import { existsSync, readFileSync } from 'node:fs';
import readline from 'node:readline';
import {
  adminLogin,
  getAdminArticles,
  getAdminServices,
  getAdminVideos,
  updateArticle,
  updateServiceCategory,
  updateVideo,
} from '../src/api/adminApi';
import { mapArticleFromApi, mapArticleToCreatePayload, mapServiceCategoryFromApi, mapServiceCategoryToPayload } from '../src/api/mappers';
import { mapClinicVideoFromApi, mapClinicVideoToCreatePayload } from '../src/api/cmsMappers';
import { resolveArticleAdminApiId } from '../src/utils/articles';
import { formatVideoDuration } from '../src/utils/clinicVideos';

const APPLY = process.argv.includes('--apply');

/** Mixed-script word -> correct Russian (same fixes as applied to the code catalogs). */
const WORD_FIXES: Record<string, string> = {
  Андrogenная: 'Андрогенная',
  андrogenная: 'андрогенная',
  андrogenной: 'андрогенной',
  Андrogenетическая: 'Андрогенетическая',
  Кuperoz: 'Купероз',
  кuperoz: 'купероз',
  кuperоз: 'купероз',
  лifting: 'лифтинг',
  Мiniaturization: 'Миниатюризация',
  миниaturization: 'миниатюризацию',
  Мелasma: 'Мелазма',
  мелasma: 'мелазма',
  Псoriasis: 'Псориаз',
  псoriasis: 'псориаз',
  Витилиgo: 'Витилиго',
  витилиgo: 'витилиго',
  Дermatolog: 'Дерматолог',
  дерматolog: 'дерматолог',
  Трихolog: 'Трихолог',
  трихolog: 'трихолог',
};
const TITLE_FIXES: Record<string, string> = { 'Apparatli kosmetologiyasi': 'Apparatli kosmetologiya' };
const MIXED = /(?<![\p{L}\p{N}])(?=[\p{L}\p{N}]*[А-Яа-яЁё])(?=[\p{L}\p{N}]*[A-Za-z])[\p{L}\p{N}]+/gu;

const unknownMixed = new Set<string>();

function fixText(text: string): string {
  let result = text;
  for (const [from, to] of Object.entries(WORD_FIXES)) {
    result = result.replace(new RegExp(`(?<![\\p{L}\\p{N}])${from}(?![\\p{L}\\p{N}])`, 'gu'), to);
  }
  for (const match of result.matchAll(MIXED)) {
    if (!/^[A-Za-z]+\d*$/.test(match[0])) unknownMixed.add(match[0]);
  }
  return result;
}

/** Applies fixText to every string inside a JSON value; returns the paths that changed. */
function fixDeep<T>(value: T, path = '', changes: string[] = []): T {
  if (typeof value === 'string') {
    const fixed = TITLE_FIXES[value] ?? fixText(value);
    if (fixed !== value) changes.push(`${path}: "${value.slice(0, 60)}" -> "${fixed.slice(0, 60)}"`);
    return fixed as T;
  }
  if (Array.isArray(value)) return value.map((item, i) => fixDeep(item, `${path}[${i}]`, changes)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, fixDeep(v, path ? `${path}.${k}` : k, changes)]),
    ) as T;
  }
  return value;
}

/** Compares two API records, ignoring timestamps and server-generated image URLs. */
function differences(a: unknown, b: unknown, path = ''): string[] {
  if (/(updated_at|created_at)$/.test(path)) return [];
  if (typeof a !== typeof b) return [path];
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return [`${path} (length ${a.length} -> ${b.length})`];
    return a.flatMap((item, i) => differences(item, b[i], `${path}[${i}]`));
  }
  if (a && b && typeof a === 'object') {
    const keys = new Set([...Object.keys(a as object), ...Object.keys(b as object)]);
    return [...keys].flatMap((k) => differences((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], path ? `${path}.${k}` : k));
  }
  return a === b ? [] : [path];
}

function ask(question: string, hidden = false): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  if (hidden) {
    // Mute echo while typing the password.
    (rl as unknown as { _writeToOutput: (s: string) => void })._writeToOutput = (s: string) => {
      if (s.includes(question)) process.stdout.write(s);
    };
  }
  return new Promise((resolve) => rl.question(question, (answer) => {
    rl.close();
    if (hidden) process.stdout.write('\n');
    resolve(answer.trim());
  }));
}

async function verify(label: string, expected: unknown, reread: () => Promise<unknown>): Promise<void> {
  const after = await reread();
  const diff = differences(expected, after);
  if (diff.length) {
    throw new Error(`${label}: after saving, these fields differ from what was intended:\n  ${diff.slice(0, 20).join('\n  ')}\nStopped — check this record in the admin panel.`);
  }
  console.log(`  ✓ ${label} verified`);
}

async function main(): Promise<void> {
  const username = process.env.ADMIN_USERNAME || (await ask('Admin login: '));
  const password = process.env.ADMIN_PASSWORD || (await ask('Admin parol: ', true));
  const { access_token: token } = await adminLogin({ username, password });
  console.log(APPLY ? 'Mode: APPLY (changes are written)\n' : 'Mode: dry run (nothing is written; add --apply)\n');

  // 1+2. Services (category title, condition texts, sub-service texts)
  for (const raw of await getAdminServices(token)) {
    const changes: string[] = [];
    const fixed = fixDeep(raw, '', changes);
    if (!changes.length) continue;
    console.log(`Service "${raw.id}":\n  ${changes.join('\n  ')}`);
    if (!APPLY) continue;
    const payload = mapServiceCategoryToPayload(mapServiceCategoryFromApi(fixed), { preserveImage: true, preserveImages: true });
    await updateServiceCategory(raw.id, payload, null, [], token);
    await verify(`service ${raw.id}`, fixed, async () => (await getAdminServices(token)).find((s) => s.id === raw.id));
  }

  // 1. Articles
  for (const raw of await getAdminArticles(token)) {
    const changes: string[] = [];
    const fixed = fixDeep(raw, '', changes);
    if (!changes.length) continue;
    console.log(`Article "${raw.slug || raw.id}":\n  ${changes.join('\n  ')}`);
    if (!APPLY) continue;
    const article = mapArticleFromApi(fixed);
    const payload = mapArticleToCreatePayload(article, { preserveImage: true });
    await updateArticle(resolveArticleAdminApiId(article), payload, null, token);
    await verify(`article ${raw.slug || raw.id}`, fixed, async () => (await getAdminArticles(token)).find((a) => a.id === raw.id));
  }

  // 3. Video durations
  const indexFile = 'public/video-thumbs/index.json';
  const durations: Record<string, { duration: number }> = existsSync(indexFile) ? JSON.parse(readFileSync(indexFile, 'utf8')) : {};
  for (const raw of await getAdminVideos(token)) {
    const seconds = durations[raw.id]?.duration;
    const current = raw.duration || '';
    if (!seconds || (current && current !== '0:00')) continue;
    const duration = formatVideoDuration(seconds);
    console.log(`Video "${raw.title_uz.slice(0, 50)}": duration "${current}" -> "${duration}"`);
    if (!APPLY) continue;
    const payload = { ...mapClinicVideoToCreatePayload(mapClinicVideoFromApi(raw)), src: raw.src, duration };
    await updateVideo(raw.id, payload, undefined, token);
    await verify(`video ${raw.id}`, { ...raw, duration }, async () => (await getAdminVideos(token)).find((v) => v.id === raw.id));
  }

  if (unknownMixed.size) {
    console.log(`\nMixed-script words with no fix rule (left as is): ${[...unknownMixed].join(', ')}`);
  }
  console.log(APPLY ? '\nDone.' : '\nDry run finished — run again with --apply to write these changes.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
