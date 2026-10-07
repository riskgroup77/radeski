/**
 * Google Maps sharxlarini Places API orqali olib, Radeski CMS API ga yozadi.
 *
 * Talab qilinadi (.env):
 *   GOOGLE_PLACES_API_KEY=...
 *   ADMIN_USERNAME=...
 *   ADMIN_PASSWORD=...
 *
 * Ixtiyoriy:
 *   GOOGLE_PLACE_ID=ChIJ...   (bo'lmasa Text Search qidiradi)
 *   SYNC_DELAY_MS=350
 *
 * Usage:
 *   npm run sync:google-reviews
 *   npm run sync:google-reviews -- --dry-run
 */
import 'dotenv/config';
import { syncGoogleReviewsToApi } from '../server/syncGoogleReviews';
import { loadProjectEnv } from '../server/loadEnv';

async function main(): Promise<void> {
  loadProjectEnv();
  const dryRun = process.argv.includes('--dry-run');

  console.log(`Google reviews sync started${dryRun ? ' (dry-run)' : ''}...`);

  const result = await syncGoogleReviewsToApi({ dryRun });

  console.log('\nResult:');
  console.log(`  Place: ${result.displayName} (${result.placeId})`);
  console.log(`  Fetched from Google: ${result.fetchedReviews}`);
  console.log(`  Created in CMS: ${result.created}`);
  console.log(`  Skipped (already synced): ${result.skipped}`);
  console.log(`  Re-published: ${result.republished}`);
  console.log(`  Aggregate rating: ${result.aggregateRating} (${result.aggregateCount} reviews)`);
  console.log(`  Clinic rating card updated: ${result.ratingUpdated ? 'yes' : 'no'}`);

  if (result.fetchedReviews === 0) {
    console.warn('\nWarning: Google returned 0 reviews. Check GOOGLE_PLACE_ID and API billing.');
  }

  console.log('\nGoogle reviews sync OK');
}

main().catch((error) => {
  console.error('\nGoogle reviews sync failed:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
