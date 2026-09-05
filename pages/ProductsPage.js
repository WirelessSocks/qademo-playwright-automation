class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productDetailName = page.getByTestId('product-detail-name');
    this.productAddToCartButton = page.getByTestId('product-add-to-cart-button');
    this.backToCatalogButton = page.getByTestId('product-bak-to-catalog');
  }

  productLink(productId) {
    return this.page.getByTestId('product-link-${productId}');
  }

  async openProduct() {
    await this.product.click();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductsPage };
