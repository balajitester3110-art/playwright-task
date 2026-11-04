import { test, expect } from '@playwright/test';

test('Validate Playwright URL contains playwright', async ({ page }) => {
  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // Validate that the URL contains "playwright"
  await expect(page).toHaveURL(/playwright/);

  // Print the current URL
  console.log('Current URL:', page.url());
});
