const { expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartPageTitle =   `Amazon.in Shopping Cart`;
        this.cartProductSelector = `.a-truncate-cut`;
    }
    async gotoCart() {
        await this.page.click(`#nav-cart`);
        await expect(this.page).toHaveTitle(this.cartPageTitle);
        await expect(this.page).toHaveURL(/.*nav_cart/);
    }
    async verifyProductInCart(productName) {
        const cartProduct = await this.page.locator(this.cartProductSelector);
        await expect(cartProduct).toHaveText(productName);
    }
}

module.exports = { CartPage };
