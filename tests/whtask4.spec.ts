import { test, expect } from '@playwright/test';

test('open and close child window', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  await childPage.close();

  await expect(page).toHaveTitle('The Internet');
});