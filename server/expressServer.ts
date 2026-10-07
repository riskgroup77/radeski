import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ChatApiError, handleDeepSeekChat } from './deepseekChatHandler';
import { handleGoogleReviewsSync } from './googleReviewsSyncHandler';
import { chatRateLimit } from './chatRateLimit';
import { handleReviewSubmit, reviewRateLimit } from './reviewSubmitHandler';
import { getDeepSeekModel, isDeepSeekConfigured, loadProjectEnv } from './loadEnv';

loadProjectEnv();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// nginx on the same host proxies /api/chat — trust its X-Forwarded-For for the client IP.
app.set('trust proxy', 'loopback');
app.disable('x-powered-by');

app.use(express.json({ limit: '48kb' }));

app.post('/api/chat', chatRateLimit, async (req, res) => {
  try {
    const reply = await handleDeepSeekChat(req.body);
    res.json({ reply });
  } catch (error) {
    if (error instanceof ChatApiError) {
      res.status(error.status).json({ error: error.message });
      return;
    }
    console.error('[chat]', error);
    res.status(500).json({ error: 'Chat service error' });
  }
});

// Visitor reviews: saved + published server-side (admin credentials never reach the browser).
app.post('/api/reviews/submit', reviewRateLimit, (req, res) => {
  void handleReviewSubmit(req, res);
});

const healthHandler: express.RequestHandler = (_req, res) => {
  const configured = isDeepSeekConfigured();
  res.json({ ok: true, aiConfigured: configured, model: getDeepSeekModel() });
};

app.get('/api/chat/health', healthHandler);
app.get('/api/chat-health', healthHandler);

/** Cron yoki admin qo'lda ishga tushirish: x-radeski-sync-secret header talab qilinadi */
app.post('/api/internal/sync-google-reviews', handleGoogleReviewsSync);
app.get('/api/internal/sync-google-reviews', handleGoogleReviewsSync);

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = Number(process.env.CHAT_SERVER_PORT || process.env.PORT || 8787);
app.listen(port, () => {
  console.log(`Radeski server listening on http://localhost:${port}`);
});
