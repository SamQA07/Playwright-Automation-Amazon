const { expect } = require('@playwright/test');
class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBox = `input[id="twotabsearchtextbox"]`;
        this.searchButton = `input[id="nav-search-submit-button"]`;
    }

    async goto() {
        await this.page.goto(`https://www.amazon.in`);
        await expect(this.page).toHaveURL(/.*amazon.in/);
    }

    async searchProduct(productName) {
        await this.page.fill(this.searchBox, productName);
        await this.page.click(this.searchButton);
    }
}

module.exports = { HomePage };
