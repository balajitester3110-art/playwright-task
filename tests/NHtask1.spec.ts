import { test, expect } from '@playwright/test';

test('Search Wikipedia using Relative XPath', async ({ page }) => {
await page.goto('https://www.wikipedia.org/');

await page.locator('//input[@id="searchInput"]');

await page.locator('//input[@name="search"]');

await page.locator('//input[@aria-label="Search Wikipedia"]');

await page.locator('//input[@type="search"]');

await page.locator('//input[contains(@id,"search")]');

await page.locator('//button[@type="submit"]');

await page.locator('//a[@id="js-link-box-en"]');

await page.locator('//a[contains(@title,"English")]');

await page.locator('//div[contains(@class,"central-featured")]');

await page.locator('//form[@id="search-form"]');

  // Perform search
  await page.locator('//input[@id="searchInput"]').fill('Playwright');
  await page.locator('//button[@type="submit"]').click();

  // Verify result
  await expect(page).toHaveURL(/Playwright/i);
  await expect(page.locator('//h1[@id="firstHeading"]')).toContainText('Playwright');
});