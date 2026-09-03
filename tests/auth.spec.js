const { test, expect } = require('@playwright/test');

// Предусловие: пользователь находится на странице Login
// Действие: вводит валидные credentials и нажимает Login
// Ожидаемый результат: после успешной авторизации отображается элемент профиля пользователя.

test('AUTH-001: successful login with standard user', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Username').fill('standard_user');
  await page.getByLabel('Password').fill('standard123');

  await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('navbar-username-link')).toBeVisible();
});

test('AUTH-002: login with invalid password', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('standart_user');
  await page.getByLabel('Password').fill('wrong_password');

  await page.getByTestId('login-submit-button').click();

  await expect(page.getByTestId('login-error-message')).toHaveText('Invalid username or password');

  await expect(page).toHaveURL(/login/);
});
