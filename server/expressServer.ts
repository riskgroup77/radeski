import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ChatApiError, handleDeepSeekChat } from './deepseekChatHandler';
import { getDeepSeekModel, isDeepSeekConfigured, loadProjectEnv } from './loadEnv';

loadProjectEnv();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json({ limit: '48kb' }));

app.post('/api/chat', async (req, res) => {
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

app.get('/api/chat/health', (_req, res) => {
  const configured = isDeepSeekConfigured();
  res.json({ ok: true, aiConfigured: configured, model: getDeepSeekModel() });
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = Number(process.env.CHAT_SERVER_PORT || process.env.PORT || 8787);
app.listen(port, () => {
  console.log(`Radeski server listening on http://localhost:${port}`);
});
