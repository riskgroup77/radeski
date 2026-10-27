import type { Locale } from '../types';
import { ARTICLE_CATALOG_LOADERS, type ArticleCatalogEntry } from './articleCatalogLoaders.generated';

/**
 * Article texts loaded so far (one chunk per article). The article page renders from here when
 * the text is already loaded — on a server-rendered page both the prerender and the browser
 * load it before rendering (preloadArticleCatalog), so the first render already has the body.
 */
const loaded = new Map<string, ArticleCatalogEntry>();
const pending = new Map<string, Promise<ArticleCatalogEntry>>();

const GENERAL_KEY = 'general-dermatology';

function loadEntry(key: string): Promise<ArticleCatalogEntry> {
  const cached = loaded.get(key);
  if (cached) return Promise.resolve(cached);
  let promise = pending.get(key);
  if (!promise) {
    promise = ARTICLE_CATALOG_LOADERS[key]().then((entry) => {
      loaded.set(key, entry);
      return entry;
    });
    pending.set(key, promise);
  }
  return promise;
}

export interface ArticleCatalogTexts {
  entry: ArticleCatalogEntry;
  /** Fallback text when the article has none of its own in this language. */
  general: ArticleCatalogEntry;
}

function hasOwnText(key: string, entry: ArticleCatalogEntry, locale: Locale): boolean {
  return Boolean(ARTICLE_CATALOG_LOADERS[key] && entry[locale]?.body?.trim());
}

/** The texts if they are already loaded (synchronous), else null. */
export function getLoadedArticleCatalog(key: string, locale: Locale): ArticleCatalogTexts | null {
  const entry = loaded.get(ARTICLE_CATALOG_LOADERS[key] ? key : GENERAL_KEY);
  if (!entry) return null;
  if (hasOwnText(key, entry, locale)) return { entry, general: entry };
  const general = loaded.get(GENERAL_KEY);
  return general ? { entry, general } : null;
}

export async function loadArticleCatalog(key: string, locale: Locale): Promise<ArticleCatalogTexts> {
  const entry = await loadEntry(ARTICLE_CATALOG_LOADERS[key] ? key : GENERAL_KEY);
  const general = hasOwnText(key, entry, locale) ? entry : await loadEntry(GENERAL_KEY);
  return { entry, general };
}
