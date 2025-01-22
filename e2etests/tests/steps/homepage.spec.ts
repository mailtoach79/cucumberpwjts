import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";
import { page } from "./basepage.spec";

setDefaultTimeout(1000 * 60);

// let browser: Browser;
// let bCxt: BrowserContext;
// let page: Page;

// Before(async function () {
//     browser = await chromium.launch({headless: false, channel: "chrome", args: ["--start-maximized"]});
//     bCxt = await browser.newContext();
//     page = await bCxt.newPage();
// });

Then('Login should be successful', async function () {
    const isVisible = await page.locator("xpath=//a[contains(., 'Edit your account information')]").isVisible();
    expect(isVisible).toEqual(false);
});

Then('Home page should be displayed', async function () {
    await page.locator("xpath=//*[@id='column-right']/div/a[14]").click();
    await page.getByRole("link", { name: 'Continue' }).click();
});

// After(async function () {
//     await page.close();
//     await browser.close();
// });