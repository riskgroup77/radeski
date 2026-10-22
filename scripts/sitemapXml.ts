/** Shared helpers for scripts that patch one section of public/sitemap.xml in place. */
import { readFileSync, writeFileSync } from 'node:fs';

export type SitemapFile = { xml: string; eol: '\n' | '\r\n' };

/** Read sitemap.xml normalised to LF (git checks it out as CRLF on Windows); remembers the original EOL. */
export function readSitemap(filePath: string): SitemapFile {
  const raw = readFileSync(filePath, 'utf8');
  return { xml: raw.replace(/\r\n/g, '\n'), eol: raw.includes('\r\n') ? '\r\n' : '\n' };
}

/** Write sitemap.xml back with the line endings it was read with. */
export function writeSitemap(filePath: string, { xml, eol }: SitemapFile): void {
  writeFileSync(filePath, eol === '\n' ? xml : xml.replace(/\n/g, eol), 'utf8');
}

type UrlBlock = { start: number; end: number; loc: string };

function listUrlBlocks(xml: string): UrlBlock[] {
  return [...xml.matchAll(/^[ \t]*<url>[\s\S]*?<\/url>/gm)].map((m) => ({
    start: m.index,
    end: m.index + m[0].length,
    loc: m[0].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? '',
  }));
}

type ReplaceUrlSectionOptions = {
  /** Which <url> entries belong to the section being regenerated. */
  isSectionUrl: (loc: string) => boolean;
  /** Text of the section's header comment (e.g. "Articles"); a matching comment right above the first entry is replaced too. */
  comment: string;
  /** Fresh section XML (LF line endings), including its header comment. */
  block: string;
  /** Where to put the section when the sitemap has none of its entries yet. */
  insertBefore?: string;
  insertAfter?: string;
};

/**
 * Replace only the contiguous run of <url> entries matched by `isSectionUrl` (plus its header comment)
 * with `block`; everything else in the sitemap is left byte-for-byte. Throws instead of guessing when
 * the section's entries are interleaved with other URLs, so a patch can never swallow other sections.
 */
export function replaceUrlSection(xml: string, options: ReplaceUrlSectionOptions): string {
  const blocks = listUrlBlocks(xml);
  const first = blocks.findIndex((b) => options.isSectionUrl(b.loc));

  if (first === -1) {
    if (options.insertAfter) {
      const idx = xml.indexOf(options.insertAfter);
      if (idx === -1) throw new Error(`Could not find insert anchor: ${options.insertAfter}`);
      const after = idx + options.insertAfter.length;
      return `${xml.slice(0, after)}\n\n${options.block}${xml.slice(after)}`;
    }
    const anchor = options.insertBefore ?? '</urlset>';
    const idx = xml.lastIndexOf(anchor);
    if (idx === -1) throw new Error(`Could not find insert anchor: ${anchor}`);
    return `${xml.slice(0, idx)}${options.block}\n\n${xml.slice(idx)}`;
  }

  let last = first;
  while (last + 1 < blocks.length && options.isSectionUrl(blocks[last + 1].loc)) last++;
  const stray = blocks.slice(last + 1).find((b) => options.isSectionUrl(b.loc));
  if (stray) {
    throw new Error(
      `Section entries are not contiguous: ${stray.loc} comes after ${blocks[last + 1].loc}. Fix sitemap.xml by hand first.`,
    );
  }

  let start = blocks[first].start;
  const escaped = options.comment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const header = xml.slice(0, start).match(new RegExp(`[ \\t]*<!--\\s*${escaped}[^>]*-->\\s*$`));
  if (header) start -= header[0].length;

  return `${xml.slice(0, start)}${options.block}${xml.slice(blocks[last].end)}`;
}
