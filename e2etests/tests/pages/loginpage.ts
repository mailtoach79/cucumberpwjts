import { Page } from "@playwright/test";
import * as loginPageLoc from "../locators/loginpageloc.json";

export default class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToLoginPage() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/");
        // await this.page.locator("xpath=//a[contains(., 'My account') and @data-toggle]").click();
        await this.page.locator(loginPageLoc.loginLink.locator).click();
    }

    async loginToApp() {
        // await this.page.getByPlaceholder("E-Mail Address").fill('dummy1234@gmail.com');
        // await this.page.getByPlaceholder("Password").fill('dummy1234@gmail.com');
        // await this.page.locator("xpath=//input[@value='Login']").click();
        await this.page.locator(loginPageLoc.emailField.locator).fill('dummy1234@gmail.com');
        await this.page.locator(loginPageLoc.passwordField.locator).fill('dummy1234@gmail.com');
        await this.page.locator(loginPageLoc.loginBtn.locator).click();
    }
}