import { chromium, test, expect } from '@playwright/test';

test('Open GitHub, print title and URL, validate, and close browser', async () => {
  // Launch browser
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Open GitHub website
  await page.goto('https://www.github.com/');

  // Get title and URL
  const title = await page.title();
  const url = page.url();

  // Print title and URL
  console.log('Page Title:', title);
  console.log('Current URL:', url);

  // Validate title and URL
  await expect(page).toHaveTitle(/GitHub/);
  await expect(page).toHaveURL(/github/);

  // Close browser
  await browser.close();
});
