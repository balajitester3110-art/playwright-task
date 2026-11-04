import { test, expect } from '@playwright/test';

test('Validate Google page title', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');

  // Validate the page title is "Google"
  await expect(page).toHaveTitle('Google');

  // Print the title in the console
  const title = await page.title();
  console.log('Page Title:', title);
});
