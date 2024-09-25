const { test } = require('@playwright/test');
const { HomePage } = require('./pages/homePage.page');
const { ProductPage } = require('./pages/productPage.page');
const { CartPage } = require('./pages/cartPage.page');

test('Search for a product on Amazon.in, add to cart, and verify', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await homePage.goto();
    await homePage.searchProduct('Samsung S23 ultra');
    await productPage.verifyItem();
    await productPage.addToCart();
    await productPage.verifyItemAdded();
    await cartPage.gotoCart();
    await cartPage.verifyProductInCart('Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)');
});
