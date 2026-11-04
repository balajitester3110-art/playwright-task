import { test, expect } from '@playwright/test';

test('Add 3rd iPhone to cart', async ({ page, context }) => {
  await page.goto('https://www.amazon.in/');

  await page.locator('#twotabsearchtextbox').fill('iPhone');
  await page.locator('#nav-search-submit-button').click();

  // Wait for search results
  await page.waitForSelector('[data-component-type="s-search-result"]');

  const product = page
    .locator('[data-component-type="s-search-result"] h2 a')
    .nth(2);

  // Open product in a new tab
  const [productPage] = await Promise.all([
    context.waitForEvent('page'),
    product.click({ modifiers: ['ControlOrMeta'] }),
  ]);

  await productPage.waitForLoadState();

  // Print product title
  console.log(await productPage.locator('#productTitle').textContent());

  // Add to cart
  await productPage.locator('#add-to-cart-button').click();

  // Verify
  await expect(productPage.locator('body')).toContainText('Added to Cart');
});