import { test, expect } from '@playwright/test';

test('Validate page title contains Google using regex', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');

  // Validate that the title contains "Google"
  await expect(page).toHaveTitle(/Google/);

  // Print the title
  const title = await page.title();
  console.log('Page Title:', title);
});
