import { test, expect } from '@playwright/test';

test('Flipkart - Handle multiple windows and buy phones', async ({ page, context }) => {
  test.setTimeout(90000); // this flow needs more than the 30s default

  await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });

  const closeButton = page.locator('button').filter({ hasText: '✕' });
  if (await closeButton.count() > 0) {
    await closeButton.first().click();
  }

  const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands and More' });
  await searchBox.fill('Samsung 5g mobile');
  await searchBox.press('Enter');
  await page.waitForLoadState('domcontentloaded');

  const products = page.locator('a[href*="/p/"]');
  await products.first().waitFor();
  console.log('Products found:', await products.count());

  for (let i = 0; i < 3; i++) {
    const productUrl = await products.nth(i).getAttribute('href');
    console.log(`Product ${i + 1}:`, productUrl);

    const page2 = await context.newPage();
    await page2.goto('https://www.flipkart.com' + productUrl, { waitUntil: 'domcontentloaded' });

    const closeBtn2 = page2.locator('button').filter({ hasText: '✕' });
    if (await closeBtn2.count() > 0) {
      await closeBtn2.first().click();
    }

    await expect(page2).toHaveURL(/flipkart/);

    const buyNowButton = page2.getByText('Buy Now');
    if (await buyNowButton.count() > 0) {
      await buyNowButton.first().click();
      console.log(`Buy Now clicked for product ${i + 1}`);
    } else {
      console.log(`Buy Now button not found for product ${i + 1}`);
    }

    await page2.close();
  }
});