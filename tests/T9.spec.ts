import { test } from '@playwright/test';

test('Compare current URL using if condition', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');

  // Get current URL
  const url = page.url();
  console.log('Current URL:', url);

  // Compare the URL
  if (url === 'https://www.google.com/') {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
});
