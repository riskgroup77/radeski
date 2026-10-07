import type { RequestHandler } from 'express';

/**
 * In-memory limits for the public AI chat endpoint, so nobody can burn through the DeepSeek
 * budget with a script. One Node process serves the chat, so memory is enough.
 *
 *  - per visitor IP: SHORT_LIMIT messages per 10 minutes and DAILY_LIMIT per 24 hours
 *  - whole site: GLOBAL_DAILY_LIMIT messages per 24 hours (hard ceiling on cost)
 */
const SHORT_WINDOW_MS = 10 * 60 * 1000;
const SHORT_LIMIT = 15;
const DAY_MS = 24 * 60 * 60 * 1000;
const DAILY_LIMIT = 80;
const GLOBAL_DAILY_LIMIT = 2000;

const hitsByIp = new Map<string, number[]>();
let globalHits: number[] = [];

function prune(timestamps: number[], now: number, windowMs: number): number[] {
  return timestamps.filter((at) => now - at < windowMs);
}

// Drop idle visitors so the map cannot grow without bound.
setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of hitsByIp) {
    const recent = prune(hits, now, DAY_MS);
    if (recent.length === 0) hitsByIp.delete(ip);
    else hitsByIp.set(ip, recent);
  }
  globalHits = prune(globalHits, now, DAY_MS);
}, SHORT_WINDOW_MS).unref();

function reject(res: Parameters<RequestHandler>[1], retryAfterSeconds: number, message: string) {
  res.setHeader('Retry-After', String(retryAfterSeconds));
  res.status(429).json({ error: message });
}

export const chatRateLimit: RequestHandler = (req, res, next) => {
  const now = Date.now();
  const ip = req.ip || req.socket.remoteAddress || 'unknown';

  globalHits = prune(globalHits, now, DAY_MS);
  if (globalHits.length >= GLOBAL_DAILY_LIMIT) {
    reject(res, 3600, 'Chat is temporarily unavailable. Please call the clinic.');
    return;
  }

  const hits = prune(hitsByIp.get(ip) ?? [], now, DAY_MS);
  const recent = hits.filter((at) => now - at < SHORT_WINDOW_MS);
  if (recent.length >= SHORT_LIMIT) {
    const retry = Math.ceil((SHORT_WINDOW_MS - (now - recent[0])) / 1000);
    reject(res, retry, 'Too many messages. Please wait a few minutes.');
    return;
  }
  if (hits.length >= DAILY_LIMIT) {
    const retry = Math.ceil((DAY_MS - (now - hits[0])) / 1000);
    reject(res, retry, 'Daily message limit reached. Please call the clinic.');
    return;
  }

  hits.push(now);
  hitsByIp.set(ip, hits);
  globalHits.push(now);
  next();
};
