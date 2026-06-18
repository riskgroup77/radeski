import type { Plugin } from 'vite';
import { ChatApiError, handleGeminiChat } from './geminiChatHandler';
import { readJsonBody } from './readJsonBody';
import { isGeminiConfigured, getGeminiModel } from './loadEnv';

function requestPath(url: string | undefined): string {
  if (!url) return '';
  return url.split('?')[0] ?? '';
}

export function geminiChatPlugin(): Plugin {
  return {
    name: 'radeski-gemini-chat-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = requestPath(req.url);

        if (!path.startsWith('/api/chat')) {
          next();
          return;
        }

        if (req.method === 'GET' && path === '/api/chat/health') {
          const configured = isGeminiConfigured();
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              ok: true,
              geminiConfigured: configured,
              model: getGeminiModel(),
            }),
          );
          return;
        }

        if (req.method !== 'POST' || path !== '/api/chat') {
          next();
          return;
        }

        try {
          const body = await readJsonBody(req);
          const reply = await handleGeminiChat(body as Parameters<typeof handleGeminiChat>[0]);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ reply }));
        } catch (error) {
          const status = error instanceof ChatApiError ? error.status : 500;
          const message =
            error instanceof Error ? error.message : 'Chat service error';
          res.statusCode = status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: message }));
        }
      });
    },
  };
}
