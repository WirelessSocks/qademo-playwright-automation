const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

// Пользователь открывает карточку товара - название товара отображается
test('PRODUCTS-001: user can open product details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  await productsPage.openProduct(4);

  await expect(productsPage.productDetailName).toBeVisible();
});

test('PRODUCTS-002: user can add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  await productPage.openProduct(4);
  await expect(productPage.productDetailName).toBeVisible();

  await productPage.addProductToCart();

  await expect(productPage.removeFromCartButton).toBeVisible();
  await expect(productPage.viewCartButton).toBeVisible();
});

test('CART-001; added product appears in cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  await productPage.openProduct(4);
  await expect(productPage.productDetailName).toBeVisible();

  await productPage.addProductToCart();
  await productPage.viewCartButton.click();

  await expect(cartPage.productName).toBeVisible();
  await expect(cartPage.produtQuantity).toBeVisible();
  await expect(cartPage.orderTotal).toBeVisible();
});

test('CART-002:user can remove product from cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  await productPage.openProduct(4);
  await expect(productPage.productDetailName).toBeVisible();

  await productPage.addProductToCart();
  await productPage.viewCartButton.click();

  await expect(cartPage.productName).toBeVisible();
  await cartPage.removeProduct();

  await expect(cartPage.emptyCartHeading).toBeVisible();
});
