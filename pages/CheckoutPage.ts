import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly addressInput: Locator;
    readonly countrySelect: Locator;
    readonly citySelect: Locator;
    readonly zipInput: Locator;
    readonly cardNameInput: Locator;
    readonly cardNumberInput: Locator;
    readonly expirationInput: Locator;
    readonly cvvInput: Locator;
    readonly checkoutButton: Locator;
    readonly invalidFeedback: Locator;

    constructor(page: Page) {
        this.page = page;
        // Selectors based on standard bootstrap forms often used or assumed IDs
        this.firstNameInput = page.locator('#name');
        this.lastNameInput = page.locator('#lastName'); // Guessed, might need adjustment
        this.emailInput = page.locator('#email');
        this.addressInput = page.locator('#address');
        this.countrySelect = page.locator('#country');
        this.citySelect = page.locator('#city');
        this.zipInput = page.locator('#zip');
        this.cardNameInput = page.locator('#cc-name');
        this.cardNumberInput = page.locator('#cc-number');
        this.expirationInput = page.locator('#cc-expiration');
        this.cvvInput = page.locator('#cc-cvv');
        // Try to find the button by text or valid class
        this.checkoutButton = page.locator('button.btn-primary').last();
        // .last() because "Add to Basket" buttons might also be btn-primary if visible,
        // but on checkout/basket page, the main action is usually at the bottom.
        // Ideally use: this.page.getByRole('button', { name: /checkout/i }) if text is known.
        this.invalidFeedback = page.locator('.invalid-feedback');
    }

    async submitCheckout() {
        // If we're not sure of the exact text, we can try robust selectors.
        // The previous run failed likely on timeout or not reaching this step.
        await this.checkoutButton.click();
    }
}

