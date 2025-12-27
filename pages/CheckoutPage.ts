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
       
        this.firstNameInput = page.locator('#name');
        this.lastNameInput = page.locator('#lastName'); 
        this.emailInput = page.locator('#email');
        this.addressInput = page.locator('#address');
        this.countrySelect = page.locator('#country');
        this.citySelect = page.locator('#city');
        this.zipInput = page.locator('#zip');
        this.cardNameInput = page.locator('#cc-name');
        this.cardNumberInput = page.locator('#cc-number');
        this.expirationInput = page.locator('#cc-expiration');
        this.cvvInput = page.locator('#cc-cvv');
    
        this.checkoutButton = page.locator('button.btn-primary').last();
        
        this.invalidFeedback = page.locator('.invalid-feedback');
    }

    async submitCheckout() {
        await this.checkoutButton.click();
    }
}

