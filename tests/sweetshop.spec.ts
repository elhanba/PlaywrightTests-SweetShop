import { test, expect } from '@playwright/test';
import { Navbar } from '../pages/Navbar';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Sweet Shop Test Suite', () => {

    test('TC_01: Verify User Login (Positive)', async ({ page }) => {
        const navbar = new Navbar(page);
        const loginPage = new LoginPage(page);

        await page.goto('/');
        await navbar.navigateToLogin();

        await loginPage.login('test@user.com', 'password123');

        await expect(page).not.toHaveURL(/\/login/);
    });

    test('TC_02: Verify User Login (Negative)', async ({ page }) => {
        const navbar = new Navbar(page);
        const loginPage = new LoginPage(page);

        await page.goto('/');
        await navbar.navigateToLogin();

        await loginPage.login('test@user.com', 'wrongpassword');

        await expect(page).toHaveURL(/.*login/);
    });

    test('TC_03: Add Item to Basket (Positive)', async ({ page }) => {
        const navbar = new Navbar(page);
        const productPage = new ProductPage(page);

        await page.goto('/sweets');

        const initialText = await navbar.basketLink.innerText(); 

        await productPage.addFirstItemToBasket();
      
        await expect(navbar.basketLink).not.toHaveText(initialText);
    });

    test('TC_05: Empty Checkout Submission (Negative)', async ({ page }) => {
        const navbar = new Navbar(page);
        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);

        await page.goto('/sweets');
        await productPage.addFirstItemToBasket();

        await navbar.navigateToBasket();

        await checkoutPage.submitCheckout();

        await expect(page.locator('.invalid-feedback:visible').first()).toBeVisible();
    });

    test('TC_10: Navigation Menu (Usability)', async ({ page }) => {
        const navbar = new Navbar(page);

        await page.goto('/');

        await navbar.navigateToSweets();
        await expect(page).toHaveURL(/.*sweets/);

        await navbar.navigateToAbout();
        await expect(page).toHaveURL(/.*about/);

        await navbar.navigateToLogin();
        await expect(page).toHaveURL(/.*login/);
    });

});
