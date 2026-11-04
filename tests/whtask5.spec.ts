import { test } from '@playwright/test';

test('Open the child window', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  await childPage.waitForLoadState();

  console.log('Parent URL:', page.url());

  console.log('Child URL:', childPage.url());

  console.log('Parent Title:', await page.title());

  console.log('Child Title:', await childPage.title());
});