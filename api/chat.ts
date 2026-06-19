import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  ChatApiError,
  handleDeepSeekChat,
  type ChatRequestBody,
} from '../server/deepseekChatHandler';
import { getDeepSeekModel, isDeepSeekConfigured, loadProjectEnv } from '../server/loadEnv';

function parseChatBody(req: VercelRequest): ChatRequestBody {
  const raw = req.body;

  if (raw && typeof raw === 'object' && !Buffer.isBuffer(raw)) {
    return raw as ChatRequestBody;
  }

  if (typeof raw === 'string' && raw.trim()) {
    return JSON.parse(raw) as ChatRequestBody;
  }

  if (Buffer.isBuffer(raw)) {
    return JSON.parse(raw.toString('utf8')) as ChatRequestBody;
  }

  throw new ChatApiError('Request body is required', 400);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    loadProjectEnv();

    if (req.method === 'GET') {
      return res.status(200).json({
        ok: true,
        aiConfigured: isDeepSeekConfigured(),
        model: getDeepSeekModel(),
      });
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = parseChatBody(req);
    const reply = await handleDeepSeekChat(body);
    return res.status(200).json({ reply });
  } catch (error) {
    if (error instanceof ChatApiError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('[api/chat]', error);
    return res.status(500).json({ error: 'Chat service error' });
  }
}
