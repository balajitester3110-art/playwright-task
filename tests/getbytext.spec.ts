import { test, expect } from '@playwright/test';

test('Automation Exercise Test using getByText', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByText('Signup / Login').click();

  await expect(page.getByText('Login to your account')).toBeVisible();
});
