import { test, expect } from '@playwright/test';

test('Validate Playwright page title contains Playwright', async ({ page }) => {
  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // Validate that the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Print the page title
  const title = await page.title();
  console.log('Page Title:', title);
});
