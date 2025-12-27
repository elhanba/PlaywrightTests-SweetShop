import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addToBasketButtons: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.addToBasketButtons = page.locator('a', { hasText: 'Add to Basket' });
    }

    async addFirstItemToBasket() {
        
        await this.addToBasketButtons.first().waitFor();
        await this.addToBasketButtons.first().click();
    }
}
