const { expect } = require('@playwright/test');
class ProductPage {
    constructor(page) {
        this.page = page;
        this.productSelector = `//span[text()="Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)"]`;
        this.addToCartButton = `//button[@id ="a-autoid-1-announce"]`;
        this.successMessage = `//div[@class="a-changeover-inner"]`;
    }

    async verifyItem() {
        await this.page.waitForSelector(this.productSelector);
        await expect(this.page.locator(this.productSelector)).toHaveText('Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)');
    }

    async addToCart() {
        await this.page.waitForSelector(this.addToCartButton);
        await this.page.click(this.addToCartButton);
    }

    async verifyItemAdded() {
        await this.page.waitForSelector(this.successMessage);
        const message = await this.page.locator(this.successMessage);
        await expect(message).toHaveText('Item Added');
    }
}

module.exports = { ProductPage };
