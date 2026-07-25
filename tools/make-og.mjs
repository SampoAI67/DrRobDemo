/* Rigenera assets/og-image.jpg (1200×630) da assets/og-source.html.
   Uso:  npx http-server -p 8099 -s .   &&   node tools/make-og.mjs            */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = 'file://' + path.join(root, 'assets', 'og-source.html');
const out = path.join(root, 'assets', 'og-image.jpg');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(src, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, type: 'jpeg', quality: 88 });
await browser.close();
console.log('og-image →', out);
