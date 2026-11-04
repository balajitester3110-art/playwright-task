import { test } from '@playwright/test';

test('Open three websites and print URLs', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');
  const googleURL = page.url();
  console.log('Google URL:', googleURL);

  // Open Instagram
  await page.goto('https://www.instagram.com/');
  const instagramURL = page.url();
  console.log('Instagram URL:', instagramURL);

  // Open Playwright
  await page.goto('https://playwright.dev/');
  const playwrightURL = page.url();
  console.log('Playwright URL:', playwrightURL);
});
