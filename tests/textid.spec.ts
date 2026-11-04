import { test, expect } from '@playwright/test';

test('SauceDemo Login Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');

  await page.locator('[name="password"]').fill('secret_sauce');

  // SauceDemo uses data-test, not data-testid
  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByText('Products')).toBeVisible();
});
