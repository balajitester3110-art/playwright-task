import { test } from '@playwright/test';

test('Handle Multiple Windows', async ({ page }) => {

  // Open the website
  await page.goto('https://the-internet.herokuapp.com/windows');

  // Store parent page
  const parentPage = page;

  // Click "Click Here" and wait for the new window
  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  // Wait for the child page to load
  await childPage.waitForLoadState();

  // Print parent page title
  console.log('Parent Page Title:', await parentPage.title());

  // Print child page title
  console.log('Child Page Title:', await childPage.title());

});
