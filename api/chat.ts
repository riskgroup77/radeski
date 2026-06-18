import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ChatApiError, handleGeminiChat } from '../server/geminiChatHandler';
import { isGeminiConfigured, getGeminiModel } from '../server/loadEnv';

import '../server/loadEnv';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const configured = isGeminiConfigured();
    return res.status(200).json({
      ok: true,
      geminiConfigured: configured,
      model: getGeminiModel(),
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const reply = await handleGeminiChat(req.body);
    return res.status(200).json({ reply });
  } catch (error) {
    if (error instanceof ChatApiError) {
      return res.status(error.status).json({ error: error.message });
    }
    console.error('[api/chat]', error);
    return res.status(500).json({ error: 'Chat service error' });
  }
}
