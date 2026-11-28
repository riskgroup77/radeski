/**
 * react-markdown without the GFM plugin shows a pipe table as one paragraph of "| a | b |" text
 * (the hair-transplant, keloid and other articles did). Instead of adding a dependency, the body
 * is split into markdown runs and tables, and the tables are rendered by the caller.
 */
export type MarkdownPart =
  | { type: 'markdown'; text: string }
  | { type: 'table'; header: string[]; rows: string[][] };

const ROW = /^\s*\|.*\|\s*$/;
const DIVIDER = /^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/;

function cells(line: string): string[] {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
}

export function splitMarkdownTables(body: string): MarkdownPart[] {
  const lines = body.split('\n');
  const parts: MarkdownPart[] = [];
  let buffer: string[] = [];
  const flush = () => {
    const text = buffer.join('\n');
    if (text.trim()) parts.push({ type: 'markdown', text });
    buffer = [];
  };
  for (let i = 0; i < lines.length; i += 1) {
    if (ROW.test(lines[i]) && i + 1 < lines.length && DIVIDER.test(lines[i + 1])) {
      flush();
      const header = cells(lines[i]);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && ROW.test(lines[i])) {
        rows.push(cells(lines[i]));
        i += 1;
      }
      i -= 1;
      parts.push({ type: 'table', header, rows });
      continue;
    }
    buffer.push(lines[i]);
  }
  flush();
  return parts;
}
