import { test, expect } from '@playwright/test';

test('Verify Website Titles', async ({ browser }) => {
  const context = await browser.newContext();

  const google = await context.newPage();
  await google.goto('https://www.google.com');

  const amazon = await context.newPage();
  await amazon.goto('https://www.amazon.in');

  const flipkart = await context.newPage();
  await flipkart.goto('https://www.flipkart.com');

  console.log(await google.title());
  console.log(await amazon.title());
  console.log(await flipkart.title());

  await expect(google).toHaveTitle('Google');
  await expect(amazon).toHaveTitle(/Amazon/);
  await expect(flipkart).toHaveTitle(
    'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!'
  );
});