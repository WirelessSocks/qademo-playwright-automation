const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('PRODUCTs-001: user can open product details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  await productPage.openProduct();

  await expect(page).not.toHaveURL('/login');
});
