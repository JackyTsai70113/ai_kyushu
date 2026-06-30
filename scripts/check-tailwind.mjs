#!/usr/bin/env node
/**
 * Dependency-free Tailwind class validator.
 *
 * Why this exists: Tailwind v4 silently emits NO css for an unknown utility
 * (e.g. `bg-indigo-650`, `xxl:grid-cols-3`, `text-md`). The element then renders
 * with no background / wrong size and the bug is invisible until someone looks at
 * the page on the right device. This script fails the build the moment such a
 * class appears, which is exactly the class of "跑版 / 顯示不出來" bug we hit.
 *
 * It is intentionally narrow: it validates the things Tailwind v4 cannot warn
 * about and that have bitten us, not every possible class.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SRC = join(ROOT, "src");

const COLOR_FAMILIES = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal",
  "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose",
];
const VALID_SHADES = new Set(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]);
// Utilities that take a color-<shade> (covers bg/text/border/ring/from/via/to/etc.)
const COLOR_UTILS = "(?:bg|text|border|ring|ring-offset|divide|from|via|to|fill|stroke|decoration|outline|accent|caret|placeholder|shadow)";
const VALID_BREAKPOINTS = new Set(["sm", "md", "lg", "xl", "2xl"]);

const families = COLOR_FAMILIES.join("|");
// e.g. hover:bg-indigo-650  ->  family=indigo shade=650
const colorRe = new RegExp(`\\b${COLOR_UTILS}-(${families})-(\\d{2,3})\\b`, "g");
// Breakpoint-looking prefix:  `xxl:` `xl2:` ...  (a prefix that ends in a digit-ish breakpoint name)
const bpRe = /\b([a-z0-9]{2,4})(?=:)/g;
// Font-size word that does not exist (`text-md`). Valid are xs/sm/base/lg/xl/2xl..9xl.
const fontSizeRe = /\btext-(md|xsm|smm)\b/g;

const findings = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      walk(p);
    } else if (/\.(tsx|ts|jsx|js)$/.test(name)) {
      lintFile(p);
    }
  }
}

function lintFile(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    let m;
    colorRe.lastIndex = 0;
    while ((m = colorRe.exec(line))) {
      const [token, , shade] = m;
      if (!VALID_SHADES.has(shade)) {
        findings.push({ file, line: i + 1, token, why: `invalid color shade "${shade}" (valid: 50–950 in 100s, plus 50/950)` });
      }
    }
    fontSizeRe.lastIndex = 0;
    while ((m = fontSizeRe.exec(line))) {
      findings.push({ file, line: i + 1, token: m[0], why: `not a real font-size (did you mean text-base / text-sm?)` });
    }
    bpRe.lastIndex = 0;
    while ((m = bpRe.exec(line))) {
      const prefix = m[1];
      // Only complain about things that clearly mimic a breakpoint name but aren't one.
      if (/^(xxl|xxs|xl2|2x|sm2|md2|lg2|xl3)$/.test(prefix) && !VALID_BREAKPOINTS.has(prefix)) {
        findings.push({ file, line: i + 1, token: `${prefix}:`, why: `unknown responsive prefix (valid: sm/md/lg/xl/2xl)` });
      }
    }
  });
}

walk(SRC);

if (findings.length === 0) {
  console.log("✓ tailwind check: no invalid utility classes found");
  process.exit(0);
}

console.error(`✗ tailwind check: ${findings.length} invalid utility class(es) found\n`);
for (const f of findings) {
  console.error(`  ${relative(ROOT, f.file)}:${f.line}  ${f.token}\n     ${f.why}`);
}
console.error(`\nThese produce NO css in Tailwind v4 and silently break the layout.`);
process.exit(1);
