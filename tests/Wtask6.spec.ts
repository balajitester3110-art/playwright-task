import { test, expect } from '@playwright/test';

test('Verify Total Tab Count', async ({ browser }) => {
  const context = await browser.newContext();

  const googlePage = await context.newPage();
  await googlePage.goto('https://www.google.com');

  const amazonPage = await context.newPage();
  await amazonPage.goto('https://www.amazon.in');

  const flipkartPage = await context.newPage();
  await flipkartPage.goto('https://www.flipkart.com');

  const pages = context.pages();

  console.log('Total tab count:', pages.length);

  expect(pages.length).toBe(3);

  await context.close();
});