import { getChatHealthPayload } from '../server/vercelChatCore.js';

export default function handler(_req, res) {
  return res.status(200).json(getChatHealthPayload());
}
