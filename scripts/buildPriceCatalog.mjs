import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const rawPath = path.join(root, "scripts", "price-list-raw.txt");
const outPath = path.join(root, "src", "data", "priceCatalog.json");

const CYRILLIC_TO_LATIN = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
  ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

function transliterate(text) {
  return text
    .split("")
    .map((ch) => {
      const lower = ch.toLowerCase();
      if (CYRILLIC_TO_LATIN[lower] !== undefined) {
        return CYRILLIC_TO_LATIN[lower];
      }
      return ch;
    })
    .join("");
}

function slugify(name) {
  const base = transliterate(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
  return base || "category";
}

function shouldSkipLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return true;
  if (/^согласовано\b/i.test(trimmed)) return true;
  if (/^услуга[\s\t]+цена\s*$/i.test(trimmed)) return true;
  if (/_{3,}/.test(trimmed)) return true;
  if (/подпис/i.test(trimmed) && !/\d+(?:,\d{2})?\s*$/.test(line)) return true;
  return false;
}

function parsePrice(raw) {
  const s = raw.trim().replace(/\s/g, "");
  if (!s) throw new Error("empty price");
  if (s === "0,00" || s === "0") return 0;
  if (s.includes(",")) {
    const [intPart, frac = ""] = s.split(",");
    if (frac === "00" || frac === "0" || frac === "") {
      return Number(intPart.replace(/,/g, ""));
    }
    return Number(`${intPart}.${frac}`);
  }
  return Number(s.replace(/,/g, ""));
}

const PRICE_LINE_RE = /^(.+)\t+(\d+(?:,\d{2})?)\s*$/;

function parsePriceList(text) {
  const lines = text.split(/\r?\n/);
  const categories = [];
  const usedIds = new Map();
  const errors = [];
  let current = null;

  const ensureUniqueId = (nameRu) => {
    let id = slugify(nameRu);
    const count = usedIds.get(id) ?? 0;
    if (count > 0) {
      id = `${id}-${count + 1}`;
    }
    usedIds.set(slugify(nameRu), count + 1);
    return id;
  };

  const startCategory = (nameRu) => {
    const name = nameRu.replace(/\t+$/g, "").trim();
    current = {
      id: ensureUniqueId(name),
      nameRu: name,
      items: [],
    };
    categories.push(current);
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (shouldSkipLine(line)) continue;

    const priceMatch = line.match(PRICE_LINE_RE);
    if (priceMatch) {
      const nameRu = priceMatch[1].trim();
      let priceValue;
      try {
        priceValue = parsePrice(priceMatch[2]);
        if (!Number.isFinite(priceValue)) {
          throw new Error("not finite");
        }
      } catch (e) {
        errors.push({ line: i + 1, text: line, reason: `price parse: ${priceMatch[2]}` });
        continue;
      }
      if (!current) {
        errors.push({ line: i + 1, text: line, reason: "item before any category" });
        startCategory("Прочее");
      }
      current.items.push({ nameRu, priceValue });
      continue;
    }

    const headerName = line.replace(/\t+$/g, "").trim();
    if (!headerName) continue;
    startCategory(headerName);
  }

  return { categories, errors };
}

const raw = fs.readFileSync(rawPath, "utf8");
const { categories, errors } = parsePriceList(raw);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ categories }, null, 2) + "\n", "utf8");

const itemCount = categories.reduce((n, c) => n + c.items.length, 0);
console.log(`Categories: ${categories.length}`);
console.log(`Items: ${itemCount}`);
if (errors.length) {
  console.log(`Parse errors: ${errors.length}`);
  for (const err of errors.slice(0, 20)) {
    console.log(`  line ${err.line}: ${err.reason}`);
  }
} else {
  console.log("Parse errors: 0");
}
