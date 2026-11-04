import { test } from '@playwright/test';

test('Compare page title using if condition', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');

  // Get the page title
  const title = await page.title();
  console.log('Page Title:', title);

  // Compare the title
  if (title === 'Google') {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
});
