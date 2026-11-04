import { test } from '@playwright/test';

test('Navigate Multiple Websites', async ({ page }) => {
  await page.goto('https://www.google.com');

  console.log('Initial URL:', page.url());

  await page.goto('https://www.amazon.in');

  console.log('Updated URL:', page.url());
});