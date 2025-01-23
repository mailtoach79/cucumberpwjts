import { Page, expect } from "@playwright/test";
import * as homePageLoc from "../locators/homepageloc.json";

export default class HomePage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForEditAcInfo() {
        // await this.page.locator("xpath=//a[contains(., 'Edit your account information')]").waitFor({ timeout: 5000 })
        // expect(this.page.locator("xpath=//a[contains(., 'Edit your account information')]")).toBeVisible();
        await this.page.locator(homePageLoc.EditActLink.locator).waitFor(homePageLoc.EditActLink.actionOptions)
        expect(this.page.locator(homePageLoc.EditActLink.locator)).toBeVisible();
    }

    async homePageDisplayed() {
        // await this.page.locator("xpath=//*[@id='column-right']/div/a[14]").click();
        await this.page.locator(homePageLoc.logOutLink.locator).click();
        await this.page.getByRole("link", { name: 'Continue' }).click();
    }

}