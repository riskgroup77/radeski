import type { Article } from '../types';
import { findArticleCatalogKey } from '../data/articleCatalogKeys';
import { CONDITION_ARTICLES } from '../data/conditionArticles';
import { ALL_LOCAL_COMMERCIAL_LANDINGS } from '../data/localCommercialSeoCatalog';
import { resolveArticleRouteKey } from './articles';
import { SERVICE_CATEGORY_ARTICLE_KEYS } from './serviceRelatedArticles';

type ArticleLike = Pick<Article, 'id' | 'slug' | 'title' | 'author' | 'date'>;

/** Specialist city pages list articles on many unrelated topics: a weak signal, like a category. */
const BROAD_TOPICS = new Set(['landing:dermatolog', 'landing:kosmetolog', 'landing:podolog', 'landing:trixolog']);

/**
 * The topics an article belongs to: the service categories, city pages (by service, either
 * city) and condition pages that already list it. Two articles sharing a topic are about the
 * same problem or treatment — those are the useful "read next" links.
 */
function articleTopics(article: ArticleLike): Set<string> {
  const routeKey = resolveArticleRouteKey(article);
  const catalogKey = findArticleCatalogKey(article);
  const topics = new Set<string>();
  for (const [categoryId, keys] of Object.entries(SERVICE_CATEGORY_ARTICLE_KEYS)) {
    if (keys.includes(catalogKey)) topics.add(`service:${categoryId}`);
  }
  for (const landing of ALL_LOCAL_COMMERCIAL_LANDINGS) {
    if (landing.articleRouteKeys?.includes(routeKey)) topics.add(`landing:${landing.slug}`);
  }
  for (const [slug, items] of Object.entries(CONDITION_ARTICLES)) {
    if (items?.some((item) => item.routeKey === routeKey)) topics.add(`condition:${slug}`);
  }
  return topics;
}

/**
 * "Read next" for an article page: articles on the same topics first (a shared condition or
 * treatment page weighs more than a shared category or specialist page), then the newest
 * ones. Replaces "the three newest articles", which linked an eczema article to laser hair
 * removal.
 */
export function pickRelatedArticles<T extends ArticleLike>(article: ArticleLike, candidates: T[], count = 3): T[] {
  const own = articleTopics(article);
  const ownId = article.id;
  const scored = candidates
    .filter((candidate) => candidate.id !== ownId && resolveArticleRouteKey(candidate) !== resolveArticleRouteKey(article))
    .map((candidate) => {
      let score = 0;
      for (const topic of articleTopics(candidate)) {
        if (own.has(topic)) score += BROAD_TOPICS.has(topic) || topic.startsWith('service:') ? 1 : 3;
      }
      return { candidate, score };
    });
  return scored
    .sort((a, b) => b.score - a.score || (b.candidate.date || '').localeCompare(a.candidate.date || ''))
    .slice(0, count)
    .map((item) => item.candidate);
}
