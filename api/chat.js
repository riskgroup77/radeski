import {
  ChatApiError,
  handleDeepSeekChat,
  parseChatBody,
  getChatHealthPayload,
} from '../server/vercelChatCore.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json(getChatHealthPayload());
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = parseChatBody(req.body);
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
