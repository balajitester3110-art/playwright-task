import { test } from '@playwright/test';

test('Print All Titles', async ({ browser }) => {
  const context = await browser.newContext();

  await (await context.newPage()).goto('https://www.google.com');
  await (await context.newPage()).goto('https://www.amazon.in');
  await (await context.newPage()).goto('https://www.flipkart.com');

  for (const page of context.pages()) {
    console.log(await page.title());
  }
});