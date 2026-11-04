import { test, expect } from '@playwright/test';

test('Expand Testing Login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/', {
    waitUntil: 'domcontentloaded',
  });

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');

  await page.locator('#submit').click();

  await expect(page).toHaveURL(/logged-in-successfully/);
});