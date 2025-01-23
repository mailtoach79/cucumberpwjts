import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";
// import { page } from "./basepage.spec";
import { getPage } from "../../corelib/basepage.spec";
import LoginPage from "../pages/loginpage";

let loginPage:LoginPage;

Given('User is on home page', async function () {
    // await getPage().goto("https://ecommerce-playground.lambdatest.io/");
    loginPage = new LoginPage(getPage());
    await loginPage.goToLoginPage();
});

When('User enter login details', async function () {
    loginPage = new LoginPage(getPage());
    await loginPage.loginToApp();
    // await getPage().locator("xpath=//a[contains(., 'My account') and @data-toggle]").click();
    // await getPage().getByPlaceholder("E-Mail Address").fill('dummy1234@gmail.com');
    // await getPage().getByPlaceholder("Password").fill('dummy1234@gmail.com');
    // await getPage().locator("xpath=//input[@value='Login']").click();
});
