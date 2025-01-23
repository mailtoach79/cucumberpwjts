import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";

setDefaultTimeout(1000 * 60);

let browser: Browser;
let bCxt: BrowserContext;
let page: Page;

Before(async function () {
    //, args: ["--start-maximized"]
    browser = await chromium.launch({ headless: false, channel: "chrome" });
    bCxt = await browser.newContext();
    page = await bCxt.newPage();
});

After(async function () {
    await page.close();
    await browser.close();
});

// export { page };
export function getPage():Page {
    return page;
}