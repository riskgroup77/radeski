import type { Request, Response } from 'express';
import { syncGoogleReviewsToApi } from './syncGoogleReviews';

export class GoogleReviewsSyncError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'GoogleReviewsSyncError';
    this.status = status;
  }
}

function readSyncSecret(): string | undefined {
  return process.env.GOOGLE_REVIEWS_SYNC_SECRET?.trim();
}

function authorizeRequest(req: Request): void {
  const secret = readSyncSecret();
  if (!secret) {
    throw new GoogleReviewsSyncError(
      503,
      'GOOGLE_REVIEWS_SYNC_SECRET is not configured on the server.',
    );
  }

  const header = req.get('x-radeski-sync-secret');
  const query = typeof req.query.secret === 'string' ? req.query.secret : undefined;
  const provided = header || query;

  if (provided !== secret) {
    throw new GoogleReviewsSyncError(401, 'Invalid sync secret.');
  }
}

export async function handleGoogleReviewsSync(req: Request, res: Response): Promise<void> {
  try {
    authorizeRequest(req);
    const dryRun = req.query.dryRun === '1' || req.query.dryRun === 'true';
    const result = await syncGoogleReviewsToApi({ dryRun });
    res.json({ ok: true, dryRun, result });
  } catch (error) {
    if (error instanceof GoogleReviewsSyncError) {
      res.status(error.status).json({ ok: false, error: error.message });
      return;
    }

    const message = error instanceof Error ? error.message : 'Google reviews sync failed';
    console.error('[google-reviews-sync]', error);
    res.status(500).json({ ok: false, error: message });
  }
}
