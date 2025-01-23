import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";
// import { page } from "./basepage.spec";
import { getPage } from "../../corelib/basepage.spec";
import HomePage from "../pages/homepage";

let homePage:HomePage;

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
    homePage = new HomePage(getPage());
    await homePage.waitForEditAcInfo();

    // await getPage().locator("xpath=//a[contains(., 'Edit your account information')]").waitFor({timeout:5000})
    // expect(getPage().locator("xpath=//a[contains(., 'Edit your account information')]")).toBeVisible();
});

Then('Home page should be displayed', async function () {
    homePage = new HomePage(getPage());
    await homePage.homePageDisplayed();

    // await getPage().locator("xpath=//*[@id='column-right']/div/a[14]").click();
    // await getPage().getByRole("link", { name: 'Continue' }).click();
});

// After(async function () {
//     await page.close();
//     await browser.close();
// });