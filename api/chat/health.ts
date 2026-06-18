import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDeepSeekModel, isDeepSeekConfigured, loadProjectEnv } from '../../server/loadEnv';

loadProjectEnv();

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const configured = isDeepSeekConfigured();
  return res.status(200).json({
    ok: true,
    aiConfigured: configured,
    model: getDeepSeekModel(),
  });
}
