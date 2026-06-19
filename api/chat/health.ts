import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDeepSeekModel, isDeepSeekConfigured } from '../_lib/env';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({
    ok: true,
    aiConfigured: isDeepSeekConfigured(),
    model: getDeepSeekModel(),
  });
}
