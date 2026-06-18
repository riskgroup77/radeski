import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ChatApiError, handleDeepSeekChat } from '../server/deepseekChatHandler';
import { getDeepSeekModel, isDeepSeekConfigured, loadProjectEnv } from '../server/loadEnv';

loadProjectEnv();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const configured = isDeepSeekConfigured();
    return res.status(200).json({
      ok: true,
      aiConfigured: configured,
      model: getDeepSeekModel(),
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const reply = await handleDeepSeekChat(req.body);
    return res.status(200).json({ reply });
  } catch (error) {
    if (error instanceof ChatApiError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('[api/chat]', error);
    return res.status(500).json({ error: 'Chat service error' });
  }
}
