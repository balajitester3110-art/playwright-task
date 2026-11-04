import { test, expect } from '@playwright/test';

test('Open Playwright website and print title and URL', async ({ page }) => {
  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // Get page title
  const title = await page.title();
  console.log('Page Title:', title);

  // Get current URL
  const url = page.url();
  console.log('Current URL:', url);

  // Optional validations
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL('https://playwright.dev/');
});
