import { test, expect } from '@playwright/test';

test('Validate current URL is Google', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');

  // Validate the current URL
  await expect(page).toHaveURL('https://www.google.com/');

  // Print the URL
  console.log('Current URL:', page.url());
});
