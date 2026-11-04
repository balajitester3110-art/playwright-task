import { test, expect } from '@playwright/test';

test('Switch Between Tabs', async ({ browser }) => {
  const context = await browser.newContext();

  const google = await context.newPage();
  await google.goto('https://www.google.com');

  const amazon = await context.newPage();
  await amazon.goto('https://www.amazon.in');

  await google.bringToFront();
  console.log(await google.title());
  await expect(google).toHaveTitle('Google');

  await amazon.bringToFront();
  console.log(await amazon.title());
  await expect(amazon).toHaveTitle(/Amazon/);
});