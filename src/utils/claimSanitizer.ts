/**
 * Medical-claims clean-up for texts that come from the CMS (doctor bios, service condition topics).
 *
 * The clinic's IPL is InMode (Lumecca); the Sciton / Forever Young service was removed, and
 * "gene-level photo-rejuvenation" is an advertising claim with no medical basis (audit 26.11.2026).
 * The CMS still holds the old wording, so it is rewritten here until it is edited in the admin.
 */
type Rule = [RegExp, string | ((match: string, ...groups: string[]) => string)];

const RULES: Rule[] = [
  // Whole phrases first, so the result still reads as a sentence.
  [/Sciton IPL va gen darajasida foto-yangilash pigment hujayralarini bosqichma-bosqich yo['‘’]q qiladi/g, "IPL InMode (Lumecca) muolajasi pigmentni bosqichma-bosqich oqartiradi"],
  [/Gen darajasida foto-yangilash qarish genlarining faolligini o['‘’]zgartiradi, yangi/g, 'IPL foto-yangilash yangi'],
  [/Фотоомоложение на генном уровне стимулирует/g, 'IPL-фотоомоложение стимулирует'],
  [/Gene-level photo-rejuvenation stimulates/g, 'IPL photo-rejuvenation stimulates'],
  [/high-end genetic-level IPL photo-rejuvenation systems/g, 'IPL photo-rejuvenation protocols'],
  [/Sciton IPL/g, 'IPL InMode'],
  [/Forever Young IPL/g, 'IPL'],
  // Anything left over.
  [/\s+на генном уровне/g, ''],
  [/Gen darajasida (\S)/g, (_m, c: string) => c.toUpperCase()],
  [/\s+gen darajasida/g, ''],
  [/\b[Gg]ene(?:tic)?-level (\S)/g, (m, c: string) => (m[0] === 'G' ? c.toUpperCase() : c)],
];

export function sanitizeClaims(text: string): string {
  if (!text) return text;
  let out = text;
  for (const [pattern, replacement] of RULES) {
    out = out.replace(pattern, replacement as never);
  }
  return out;
}
