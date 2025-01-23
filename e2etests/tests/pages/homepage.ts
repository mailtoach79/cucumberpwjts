import { Page, expect } from "@playwright/test";

export default class HomePage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForEditAcInfo() {
        await this.page.locator("xpath=//a[contains(., 'Edit your account information')]").waitFor({ timeout: 5000 })
        expect(this.page.locator("xpath=//a[contains(., 'Edit your account information')]")).toBeVisible();
    }

    async homePageDisplayed() {
        await this.page.locator("xpath=//*[@id='column-right']/div/a[14]").click();
        await this.page.getByRole("link", { name: 'Continue' }).click();
    }

}