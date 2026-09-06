class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productDetailName = page.getByTestId('product-detail-name');
    this.productDetailAddToCartButton = page.getByTestId('product-add-to-cart-button');
    this.backToCatalogButton = page.getByTestId('product-back-to-catalog');
    this.removeFromCartButton = page.getByTestId('product-remove-from-cart-button');
    this.viewCartButton = page.getByTestId('product-view-cart-button');
  }

  productLink(productId) {
    return this.page.getByTestId(`product-link-${productId}`);
  }

  async openProduct(productId) {
    await this.productLink(productId).click();
  }

  async addProductToCart() {
    await this.productDetailAddToCartButton.click();
  }

  async backToCatalog() {
    await this.backToCatalogButton.click();
  }
}

module.exports = { ProductsPage };
