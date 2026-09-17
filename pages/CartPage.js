class CartPage {
  constructor(page) {
    this.page = page;

    this.productName = page.getByTestId('cart-item-name-4');
    this.productQuantity = page.getByTestId('cart-item-quantity-4');
    this.removeProductButton = page.getByTestId('cart-item-remove-4');
    this.orderTotal = page.getByTestId('order-total');
    this.emptyCartHeading = page.getByTestId('cart-empty-heading');
    this.proceedToCheckoutButton = page.getByTestId('proceed-to-checkout-button');
  }

  async removeProduct() {
    await this.removeProductButton.click();
  }
}

module.exports = { CartPage };
