import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";
import { page } from "./basepage.spec";

Given('User is on home page', async function () {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
});

When('User enter login details', async function () {
    await page.locator("xpath=//a[contains(., 'My account') and @data-toggle]").click();
    await page.getByPlaceholder("E-Mail Address").fill('dummy1234@gmail.com');
    await page.getByPlaceholder("Password").fill('dummy1234@gmail.com');
    await page.locator("xpath=//input[@value='Login']").click();
});
