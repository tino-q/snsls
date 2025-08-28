// tools/snap-home.mjs
import fs from "node:fs/promises";
import puppeteer from "puppeteer";

const URL = "https://argentina-trips.com/"; // <-- your homepage
const ACTION = "accept"; // 'accept' | 'reject' | 'close' (dismiss)

const SELECTORS = {
  accept: [
    "#didomi-notice-agree-button",
    ".didomi-accept-button",
    '[data-didomi-action="agree"]',
    '[data-didomi-translate="actions:agree"]',
    ".didomi-components-button--color.didomi-components-button--primary",
  ],
  reject: [
    "#didomi-notice-disagree-button",
    ".didomi-reject-button",
    '[data-didomi-action="disagree"]',
    '[data-didomi-translate="actions:disagree"]',
    ".didomi-components-button--color.didomi-components-button--secondary",
  ],
  close: [
    ".didomi-dismiss-button",
    '[data-didomi-action="close"]',
    '[data-didomi-translate="actions:close"]',
  ],
  containerHints: [
    "#didomi-host",
    ".didomi-popup",
    "#didomi-consent-popup",
    ".didomi-notice",
  ],
};

async function clickInFrame(frame, selectors, label) {
  for (const sel of selectors) {
    const el = await frame.$(sel);
    if (el) {
      try {
        await el.click({ delay: 20 });
        console.log(
          `Clicked ${label}: ${sel} in frame ${frame.url() || "main"}`
        );
        return true;
      } catch {
        // try JS click as fallback
        await frame.evaluate((e) => e.click(), el);
        console.log(`JS-clicked ${label}: ${sel}`);
        return true;
      }
    }
  }
  return false;
}

async function waitForDidomi(page, timeout = 8000) {
  // race: any known container OR any action button
  const anySelector = [
    ...SELECTORS.containerHints,
    ...SELECTORS.accept,
    ...SELECTORS.reject,
    ...SELECTORS.close,
  ].join(", ");
  try {
    await page.waitForSelector(anySelector, { timeout });
    return true;
  } catch {
    return false;
  }
}

async function handleDidomi(page, action = "accept") {
  const buttons = SELECTORS[action] || SELECTORS.accept;

  // Quick path: main frame
  if (await waitForDidomi(page, 6000)) {
    if (await clickInFrame(page.mainFrame(), buttons, action)) return true;
  }

  // If in an iframe, try all frames
  for (const f of page.frames()) {
    if (await clickInFrame(f, buttons, action)) return true;
  }

  // Some sites lazy-mount; wait a bit & retry once
  await new Promise((r) => setTimeout(r, 1000));
  if (await clickInFrame(page.mainFrame(), buttons, action)) return true;
  for (const f of page.frames()) {
    if (await clickInFrame(f, buttons, action)) return true;
  }

  console.log("Didomi banner not found (or already handled).");
  return false;
}

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setUserAgent("Mozilla/5.0 (snapshot)");
await page.setViewport({ width: 1366, height: 900 });

await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

// --- Handle Didomi ---
const clicked = await handleDidomi(page, ACTION);
if (clicked) {
  // let the DOM settle & consent apply
  await page
    .waitForNetworkIdle({ idleTime: 500, timeout: 5000 })
    .catch(() => {});
  await new Promise((r) => setTimeout(r, 1000));
}

// --- Snapshot ---
const html = await page.content();
await fs.writeFile("home-rendered.html", html, "utf8");
await page.screenshot({ path: "home.png", fullPage: true });
await page.pdf({ path: "home.pdf", printBackground: true, format: "A4" });

await browser.close();
console.log("Saved: home-rendered.html, home.png, home.pdf");
