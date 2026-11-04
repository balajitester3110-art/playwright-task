import { test, expect } from '@playwright/test';
test('Child window ', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  await childPage.waitForLoadState();

  console.log('Child URL:', childPage.url());

  await expect(childPage.locator('h3')).toHaveText('New Window');
});