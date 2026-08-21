import type { Plugin } from 'vite';
import type { IncomingMessage, ServerResponse } from 'node:http';

const PREFIX = '/phothera-embed';
const UPSTREAM = 'https://www.phothera.com';

function rewriteHtml(html: string): string {
  let out = html;
  // Root-relative asset/navigation URLs → stay under our embed proxy
  out = out.replace(/\b(href|src|action)=(["'])\/(?!\/)/gi, `$1=$2${PREFIX}/`);
  out = out.replace(/\b(href|src|action)=(["'])https?:\/\/(?:www\.)?phothera\.com\//gi, `$1=$2${PREFIX}/`);
  out = out.replace(/url\(\s*(['"]?)\/(?!\/)/gi, `url($1${PREFIX}/`);
  out = out.replace(/url\(\s*(['"]?)https?:\/\/(?:www\.)?phothera\.com\//gi, `url($1${PREFIX}/`);
  // <base> would send clicks off-proxy; remove if present
  out = out.replace(/<base\b[^>]*>/gi, '');
  return out;
}

async function proxyEmbed(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const rawUrl = req.url || PREFIX;
  const pathAndQuery = rawUrl.startsWith(PREFIX) ? rawUrl.slice(PREFIX.length) || '/' : rawUrl;
  const target = new URL(pathAndQuery.startsWith('/') ? pathAndQuery : `/${pathAndQuery}`, UPSTREAM);

  const headers: Record<string, string> = {
    Accept: String(req.headers.accept || '*/*'),
    'User-Agent':
      String(req.headers['user-agent'] || '') ||
      'Mozilla/5.0 (compatible; RadeskiEmbed/1.0)',
  };
  if (req.headers['accept-language']) {
    headers['Accept-Language'] = String(req.headers['accept-language']);
  }

  const upstream = await fetch(target.toString(), {
    method: req.method || 'GET',
    headers,
    redirect: 'follow',
  });

  const contentType = upstream.headers.get('content-type') || 'application/octet-stream';
  res.statusCode = upstream.status;

  // Allow embedding on our origin; drop upstream frame lock
  for (const [key, value] of upstream.headers.entries()) {
    const lower = key.toLowerCase();
    if (
      lower === 'x-frame-options' ||
      lower === 'content-security-policy' ||
      lower === 'content-security-policy-report-only' ||
      lower === 'content-encoding' ||
      lower === 'content-length' ||
      lower === 'transfer-encoding' ||
      lower === 'connection'
    ) {
      continue;
    }
    res.setHeader(key, value);
  }
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'public, max-age=300');

  if (contentType.includes('text/html')) {
    const html = rewriteHtml(await upstream.text());
    res.end(html);
    return;
  }

  if (contentType.includes('text/css') || contentType.includes('javascript')) {
    let text = await upstream.text();
    if (contentType.includes('text/css')) {
      text = text
        .replace(/url\(\s*(['"]?)\/(?!\/)/gi, `url($1${PREFIX}/`)
        .replace(/url\(\s*(['"]?)https?:\/\/(?:www\.)?phothera\.com\//gi, `url($1${PREFIX}/`);
    }
    res.end(text);
    return;
  }

  const buf = Buffer.from(await upstream.arrayBuffer());
  res.end(buf);
}

/**
 * Serves Phothera pages under /phothera-embed/* so they can be iframed
 * from the Radeski SPA (upstream sets X-Frame-Options: SAMEORIGIN).
 */
export function photheraEmbedPlugin(): Plugin {
  return {
    name: 'phothera-embed-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith(PREFIX)) {
          next();
          return;
        }
        proxyEmbed(req, res).catch((error) => {
          console.error('[phothera-embed]', error);
          res.statusCode = 502;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end('Phototherapy embed proxy failed.');
        });
      });
    },
  };
}
