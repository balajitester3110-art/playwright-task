import { test, expect } from '@playwright/test';

test('Verify Result', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  const dialogPromise = page.waitForEvent('dialog');

  await page.getByText('Click for JS Confirm').click();

  const dialog = await dialogPromise;
  await dialog.accept();

  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
