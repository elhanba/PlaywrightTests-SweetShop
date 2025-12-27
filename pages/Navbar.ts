import { Page, Locator } from '@playwright/test';

export class Navbar {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly basketLink: Locator;
    readonly sweetsLink: Locator;
    readonly aboutLink: Locator;
    readonly brandLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Scoping to .navbar-nav to avoid picking up buttons in the page body
        this.loginLink = page.locator('.navbar-nav a[href="/login"]');
        this.basketLink = page.locator('.navbar-nav a[href="/basket"]');
        this.sweetsLink = page.locator('.navbar-nav a[href="/sweets"]');
        this.aboutLink = page.locator('.navbar-nav a[href="/about"]');
        this.brandLink = page.locator('.navbar-brand');
    }

    async navigateToLogin() {
        await this.loginLink.click();
    }

    async navigateToBasket() {
        await this.basketLink.click();
    }

    async navigateToSweets() {
        await this.sweetsLink.click();
    }

    async navigateToAbout() {
        await this.aboutLink.click();
    }
}
