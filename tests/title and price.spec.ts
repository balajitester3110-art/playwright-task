import { test } from '@playwright/test';

test('Get Amazon title and price', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  // Get page title
  const title = await page.title();
  console.log('Title:', title);

  // Search for a product
  await page.locator('#twotabsearchtextbox').fill('iPhone 15');
  await page.locator('#nav-search-submit-button').click();

  // Get price of the first product
  const price = await page.locator('.a-price .a-offscreen').first().textContent();

  console.log('Price:', price);
});