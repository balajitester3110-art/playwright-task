import { test, expect } from '@playwright/test';

test('Expand Testing Login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.locator('#username').fill('practice');
  await page.locator('#password').fill('SuperSecretPassword!');

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/secure/);
});