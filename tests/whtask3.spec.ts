import { test, expect } from '@playwright/test';

test('count the pages', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  await childPage.waitForLoadState();

  const pages = page.context().pages();

  console.log('Total open pages:', pages.length);

  expect(pages.length).toBe(2);
});