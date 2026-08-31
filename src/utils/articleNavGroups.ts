import type { Article, ServiceCategory } from '../types';
import { filterPublicArticles } from './articles';
import { getRelatedArticlesForService } from './serviceRelatedArticles';

export interface ArticleNavGroup {
  category: ServiceCategory;
  articles: Article[];
}

/** Navbar «Maqolalar» uchun xizmat kategoriyasi bo‘yicha guruhlangan ro‘yxat. */
export function buildArticleNavGroups(
  articles: Article[],
  categories: ServiceCategory[],
): ArticleNavGroup[] {
  const publicArticles = filterPublicArticles(articles);

  return categories
    .map((category) => ({
      category,
      articles: getRelatedArticlesForService(publicArticles, category.id),
    }))
    .filter((group) => group.articles.length > 0);
}
