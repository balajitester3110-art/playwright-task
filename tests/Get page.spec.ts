import { test, expect } from '@playwright/test';

test('Get current URL and print it', async ({ page }) => {
  // Open Wikipedia
  await page.goto('https://www.wikipedia.org/');

  // Get the current URL
  const url = page.url();

  // Print the URL in the console
  console.log('Current URL:', url);

  // Verify the URL contains "wikipedia"
  await expect(page).toHaveURL(/wikipedia/);
});
