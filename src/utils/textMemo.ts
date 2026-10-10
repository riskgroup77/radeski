/**
 * Helpers for the price-name translators: they run for ~1600 price rows on every page load,
 * so their phrase tables are compiled once and results are cached instead of rebuilding
 * hundreds of RegExps per call (that alone cost ~1 s of main thread on a phone).
 */

/** Caches a pure string function (results never change for the same arguments). */
export function memoizeText<A extends (string | boolean | undefined)[]>(
  fn: (...args: A) => string,
  limit = 5000,
): (...args: A) => string {
  const cache = new Map<string, string>();
  return (...args: A) => {
    const key = args.map(String).join('\u0000');
    const hit = cache.get(key);
    if (hit !== undefined) return hit;
    const value = fn(...args);
    if (cache.size >= limit) cache.clear();
    cache.set(key, value);
    return value;
  };
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const boundaryCache = new WeakMap<readonly (readonly [string, string])[], [RegExp, string][]>();

/** `[from, to]` phrase table → regexes that match `from` only as a whole word/phrase. */
export function compileBoundaryPhrases(phrases: readonly (readonly [string, string])[]): [RegExp, string][] {
  let compiled = boundaryCache.get(phrases);
  if (!compiled) {
    compiled = phrases.map(([from, to]) => [
      new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(from)}(?![\\p{L}\\p{N}])`, 'giu'),
      to,
    ]);
    boundaryCache.set(phrases, compiled);
  }
  return compiled;
}

const literalCache = new WeakMap<readonly (readonly [string, string])[], [RegExp, string][]>();

/** `[from, to]` table → case-insensitive literal (escaped) regexes. */
export function compileLiteralPhrases(phrases: readonly (readonly [string, string])[]): [RegExp, string][] {
  let compiled = literalCache.get(phrases);
  if (!compiled) {
    compiled = phrases.map(([from, to]) => [new RegExp(escapeRegExp(from), 'gi'), to]);
    literalCache.set(phrases, compiled);
  }
  return compiled;
}

export function applyCompiled(text: string, compiled: [RegExp, string][]): string {
  let result = text;
  for (const [pattern, to] of compiled) result = result.replace(pattern, to);
  return result;
}

/** First-wins lookup table keyed by a normalized form of the `from` side. */
export function buildKeyIndex<V>(entries: Iterable<readonly [string, V]>, normalize: (text: string) => string): Map<string, V> {
  const index = new Map<string, V>();
  for (const [from, value] of entries) {
    const key = normalize(from);
    if (!index.has(key)) index.set(key, value);
  }
  return index;
}
