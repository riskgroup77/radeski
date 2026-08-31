import 'dotenv/config';
import { getReviews } from '../src/api/publicApi';
import { SERVICE_CATEGORIES } from '../src/data';
import {
  resolveReviewServiceCategoryId,
  countReviewsByServiceCategory,
} from '../src/utils/customerReviewServiceFilter';
import type { CustomerReview } from '../src/data/sitePagesContent';

async function main() {
  const reviews = await getReviews(true);
  const published = reviews.filter((r) => r.published);
  console.log('Total published:', published.length);

  const mapped: CustomerReview[] = published.map((r) => ({
    id: r.id,
    authorName: r.author_name,
    service: r.service_uz
      ? { uz: r.service_uz, ru: r.service_ru || r.service_uz, en: r.service_en || r.service_uz }
      : undefined,
    rating: r.rating,
    comment: { uz: r.comment_uz, ru: r.comment_ru || '', en: r.comment_en || '' },
    date: r.created_at.slice(0, 10),
    published: r.published,
  }));

  const counts = countReviewsByServiceCategory(mapped, SERVICE_CATEGORIES);
  let sum = 0;
  for (const cat of SERVICE_CATEGORIES) {
    const c = counts.get(cat.id) ?? 0;
    if (c > 0) console.log(`${cat.id}: ${c} (${cat.title.uz})`);
    sum += c;
  }
  const general = counts.get('general') ?? 0;
  if (general > 0) console.log(`general: ${general} (Umumiy)`);
  sum += general;
  console.log('Sum all buckets:', sum);
  console.log('Should equal total:', published.length);

  const uncategorized = mapped.filter(
    (r) => resolveReviewServiceCategoryId(r, SERVICE_CATEGORIES) === 'general',
  );
  const svcCounts = new Map<string, number>();
  for (const r of uncategorized) {
    const s = r.service?.uz || '(empty)';
    svcCounts.set(s, (svcCounts.get(s) ?? 0) + 1);
  }
  console.log('\nUncategorized service labels:');
  [...svcCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([s, c]) => console.log(`${c}\t${s}`));

  console.log('\nSample uncategorized comments:');
  uncategorized.slice(0, 12).forEach((r) => {
    console.log(`- ${r.authorName}: ${r.comment.uz.slice(0, 100)}...`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
