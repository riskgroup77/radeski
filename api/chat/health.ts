import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDeepSeekModel, isDeepSeekConfigured, loadProjectEnv } from '../../server/loadEnv';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    loadProjectEnv();
    return res.status(200).json({
      ok: true,
      aiConfigured: isDeepSeekConfigured(),
      model: getDeepSeekModel(),
    });
  } catch (error) {
    console.error('[api/chat/health]', error);
    return res.status(500).json({
      ok: false,
      aiConfigured: false,
      error: 'Chat health check failed',
    });
  }
}
