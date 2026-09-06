const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

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
