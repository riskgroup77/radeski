import type { Request, RequestHandler, Response } from 'express';
import { createReview } from '../src/api/publicApi';
import { adminLogin, patchReview } from '../src/api/adminApi';
import type { ReviewCreatePayload } from '../src/api/cmsTypes';

/**
 * POST /api/reviews/submit — saves a visitor review and publishes it right away.
 *
 * Publishing needs the admin account. That used to happen in the visitor's browser with the
 * admin password compiled into the site's JavaScript (readable by anyone). Now only this
 * server holds the credentials (ADMIN_USERNAME / ADMIN_PASSWORD in .env).
 */

const LIMITS = { author: 80, comment: 2000, service: 160 };
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const TOKEN_TTL_MS = 10 * 60 * 1000;

const submissionsByIp = new Map<string, number[]>();
let cachedToken: { value: string; at: number } | null = null;

setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of submissionsByIp) {
    const recent = hits.filter((at) => now - at < WINDOW_MS);
    if (recent.length === 0) submissionsByIp.delete(ip);
    else submissionsByIp.set(ip, recent);
  }
}, WINDOW_MS).unref();

export const reviewRateLimit: RequestHandler = (req, res, next) => {
  const now = Date.now();
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const hits = (submissionsByIp.get(ip) ?? []).filter((at) => now - at < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) {
    res.setHeader('Retry-After', String(Math.ceil((WINDOW_MS - (now - hits[0])) / 1000)));
    res.status(429).json({ error: 'Too many reviews. Please try again later.' });
    return;
  }
  hits.push(now);
  submissionsByIp.set(ip, hits);
  next();
};

function text(value: unknown, max: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed || undefined;
}

function parsePayload(body: unknown): ReviewCreatePayload | null {
  if (!body || typeof body !== 'object') return null;
  const raw = body as Record<string, unknown>;
  const author = text(raw.author_name, LIMITS.author);
  const comment = text(raw.comment_uz, LIMITS.comment);
  const rating = Number(raw.rating);
  if (!author || !comment || !Number.isInteger(rating) || rating < 1 || rating > 5) return null;

  return {
    author_name: author,
    rating,
    comment_uz: comment,
    comment_ru: text(raw.comment_ru, LIMITS.comment),
    comment_en: text(raw.comment_en, LIMITS.comment),
    service_uz: text(raw.service_uz, LIMITS.service),
    service_ru: text(raw.service_ru, LIMITS.service),
    service_en: text(raw.service_en, LIMITS.service),
  };
}

async function getAdminToken(): Promise<string | null> {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!username || !password) return null;

  if (cachedToken && Date.now() - cachedToken.at < TOKEN_TTL_MS) return cachedToken.value;
  const { access_token } = await adminLogin({ username, password });
  cachedToken = { value: access_token, at: Date.now() };
  return access_token;
}

export async function handleReviewSubmit(req: Request, res: Response): Promise<void> {
  const payload = parsePayload(req.body);
  if (!payload) {
    res.status(400).json({ error: 'Invalid review' });
    return;
  }

  try {
    const created = await createReview(payload);
    if (created.published) {
      res.json(created);
      return;
    }

    const token = await getAdminToken();
    if (!token) {
      // No credentials configured — the review waits for moderation in the admin panel.
      console.warn('[reviews] ADMIN_USERNAME/ADMIN_PASSWORD not set — review left for moderation');
      res.status(202).json(created);
      return;
    }

    try {
      res.json(await patchReview(created.id, { published: true }, token));
    } catch (error) {
      cachedToken = null; // token may have expired — next request logs in again
      console.error('[reviews] publish failed, left for moderation', error);
      res.status(202).json(created);
    }
  } catch (error) {
    console.error('[reviews] submit failed', error);
    res.status(502).json({ error: 'Review could not be saved' });
  }
}
