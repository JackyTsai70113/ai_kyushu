#!/usr/bin/env node
/**
 * Multi-viewport screenshot harness for catching 跑版 (visual layout breakage).
 *
 * It serves the production build with `vite preview`, then walks every main
 * segment of the app at a phone width and a desktop width and saves full-page
 * PNGs under screenshots/. Diff them against a known-good set (or just eyeball
 * them) to spot overflow, invisible elements, and broken responsive layout that
 * a static class check cannot see.
 *
 * Usage:
 *   npm run build            # produce dist/ first (the npm script does this for you)
 *   node scripts/screenshots.mjs
 *
 * Requires: npm i -D playwright   &&   npx playwright install chromium
 */
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PORT = Number(process.env.PREVIEW_PORT || 4173);
const BASE = `http://localhost:${PORT}/`;
const OUT = join(ROOT, "screenshots");

const SEGMENTS = ["itinerary", "guide", "phrases", "planner", "ai"];
const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },   // iPhone 14-ish
  { name: "desktop", width: 1440, height: 900 },
];

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("✗ playwright is not installed.\n  Run:  npm i -D playwright  &&  npx playwright install chromium");
  process.exit(2);
}

mkdirSync(OUT, { recursive: true });

// --- start `vite preview` ---------------------------------------------------
const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
  cwd: ROOT,
  stdio: "ignore",
  env: { ...process.env },
});

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`preview server did not become ready at ${url}`);
}

function cleanup() {
  try { server.kill("SIGTERM"); } catch { /* noop */ }
}
process.on("exit", cleanup);
process.on("SIGINT", () => { cleanup(); process.exit(130); });

try {
  await waitForServer(BASE);
  const browser = await chromium.launch();
  let count = 0;

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    await page.goto(BASE, { waitUntil: "networkidle" });

    for (const seg of SEGMENTS) {
      // The nav button id differs between the mobile drawer and desktop sidebar.
      const id = vp.name === "mobile" ? `#mobile-segment-${seg}` : `#sidebar-segment-${seg}`;
      const btn = page.locator(id);
      if (await btn.count()) {
        await btn.first().click();
        await page.waitForTimeout(450); // let the segment transition settle
      }
      const file = join(OUT, `${seg}-${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      count++;
      console.log(`  ✓ ${seg} @ ${vp.name} -> ${file.replace(ROOT + "/", "")}`);
    }
    await ctx.close();
  }

  await browser.close();
  console.log(`\n✓ wrote ${count} screenshots to screenshots/`);
} catch (err) {
  console.error("✗ screenshot run failed:", err.message);
  process.exitCode = 1;
} finally {
  cleanup();
}
