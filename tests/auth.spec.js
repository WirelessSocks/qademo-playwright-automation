const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
// Предусловие: пользователь находится на странице Login
// Действие: вводит валидные credentials и нажимает Login
// Ожидаемый результат: после успешной авторизации отображается элемент профиля пользователя.

test('AUTH-001: successful login with standard user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  // await page.goto('/login');

  // await page.getByLabel('Username').fill('standard_user');
  // await page.getByLabel('Password').fill('standard123');

  // await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('navbar-username-link')).toBeVisible();
});

test('AUTH-002: login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('standart_user', 'wrong_password');

  // await page.goto('/login');
  // await page.getByLabel('Username').fill('standart_user');
  // await page.getByLabel('Password').fill('wrong_password');

  // await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('login-error-message')).toHaveText('Invalid username or password');

  await expect(page).toHaveURL(/login/);
});

test('AUTH-003: locked user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('locked_user', 'locked123');

  // await page.goto('/login');

  // await page.getByLabel('Username').fill('locked_user');
  // await page.getByLabel('Password').fill('locked123');
  // await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('login-error-message')).toHaveText('Account is locked');

  await expect(page).toHaveURL(/login/);
});

test('AUTH-004: user can logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'standard123');

  // await page.goto('/login');
  // await page.getByLabel('Username').fill('standard_user');
  // await page.getByLabel('Password').fill('standard123');
  // await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('navbar-username-link')).toBeVisible();

  await homePage.logout();

  // await page.getByTestId('navbar-logout-button').click();

  await expect(page.getByTestId('hero-signin-button')).toBeVisible();
  await expect(page.getByTestId('hero-signin-button')).toHaveText('Sign In');
});
