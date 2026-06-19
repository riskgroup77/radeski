import { loadEnv, type Plugin } from 'vite';
import { ChatApiError, handleDeepSeekChat } from './deepseekChatHandler';
import { readJsonBody } from './readJsonBody';
import {
  getDeepSeekModel,
  isDeepSeekConfigured,
  loadProjectEnv,
} from './loadEnv';

function requestPath(url: string | undefined): string {
  if (!url) return '';
  return url.split('?')[0] ?? '';
}

export function clinicChatPlugin(): Plugin {
  let projectRoot = process.cwd();

  function syncEnv(mode: string, root: string): void {
    projectRoot = root;
    loadProjectEnv(loadEnv(mode, root, ''), root);
  }

  return {
    name: 'radeski-clinic-chat-api',
    configResolved(config) {
      syncEnv(config.mode, config.root);
    },
    configureServer(server) {
      syncEnv(server.config.mode, server.config.root);

      server.middlewares.use(async (req, res, next) => {
        const path = requestPath(req.url);

        if (!path.startsWith('/api/chat')) {
          next();
          return;
        }

        syncEnv(server.config.mode, server.config.root);

        if (
          req.method === 'GET' &&
          (path === '/api/chat/health' || path === '/api/chat-health')
        ) {
          const configured = isDeepSeekConfigured(projectRoot);
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              ok: true,
              aiConfigured: configured,
              model: getDeepSeekModel(),
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
          const reply = await handleDeepSeekChat(
            body as Parameters<typeof handleDeepSeekChat>[0],
            projectRoot,
          );
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
