import { test, expect } from '@playwright/test';

test('eBay search', async ({ page }) => {
  await page.goto('https://www.ebay.com/');

  // Enter search text
  await page.locator('#gh-ac').fill('laptop');

  // Click Search
  await page.locator('#gh-search-btn').click();


});