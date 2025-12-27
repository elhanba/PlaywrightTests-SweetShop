import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addToBasketButtons: Locator;

    constructor(page: Page) {
        this.page = page;
        // Using text selector which is more robust than CSS implementation detail
        // Using text selector which is more robust than CSS implementation detail
        this.addToBasketButtons = page.locator('a', { hasText: 'Add to Basket' });
    }

    async addFirstItemToBasket() {
        // Wait for the buttons to be visible to ensure data is loaded
        await this.addToBasketButtons.first().waitFor();
        await this.addToBasketButtons.first().click();
    }
}
