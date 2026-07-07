/**
 * Reads price-category-order.json and patches PRICE_CATEGORY_ORDER in priceCategoryLabels.ts
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const orderPath = path.join(root, "scripts", "price-category-order.json");
const labelsPath = path.join(root, "src", "data", "priceCategoryLabels.ts");

const order = JSON.parse(fs.readFileSync(orderPath, "utf8"));
const ids = order.filter((c) => c.itemCount > 0).map((c) => c.id);

let source = fs.readFileSync(labelsPath, "utf8");
const replacement = `export const PRICE_CATEGORY_ORDER: string[] = [\n${ids.map((id) => `  '${id}',`).join("\n")}\n];`;

source = source.replace(
  /export const PRICE_CATEGORY_ORDER: string\[\] = \[[\s\S]*?\];/,
  replacement,
);

fs.writeFileSync(labelsPath, source, "utf8");
console.log(`Updated PRICE_CATEGORY_ORDER (${ids.length} sections)`);
