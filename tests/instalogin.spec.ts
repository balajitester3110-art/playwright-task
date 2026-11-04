import { test, expect } from '@playwright/test';

test('Facebook Login Test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.locator('#_R_1h6kqsqppb6amH1_').fill('balaji@gmail.com');

  await page.locator('[name="pass"]').fill('password123');

  await page.getByRole('button', { name: 'Log in' }).click();

});
