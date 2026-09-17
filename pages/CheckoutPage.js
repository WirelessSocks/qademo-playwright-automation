class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.getByTestId('checkout-first-name');
    this.lastNameInput = page.getByTestId('checkout-last-name');
    this.addressInput = page.getByTestId('checkout-address');

    this.cardNumberInput = page.getByTestId('checkout-card-number');
    this.expiryInput = page.getByTestId('checkout-expiry');
    this.cvvInput = page.getByTestId('checkout-cvv');
    this.cardholderNameInput = page.getByTestId('checkout-cardholder-name');

    this.placeOrderButton = page.getByTestId('place-order-button');
    this.orderConfirmationHeading = page.getByTestId('order-confirmation-heading');
  }

  async fillCheckoutForm(firstName, lastName, address, cardNumber, expiry, cvv, cardholderName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.addressInput.fill(address);

    await this.cardNumberInput.fill(cardNumber);
    await this.expiryInput.fill(expiry);
    await this.cvvInput.fill(cvv);
    await this.cardholderNameInput.fill(cardholderName);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}

module.exports = { CheckoutPage };
