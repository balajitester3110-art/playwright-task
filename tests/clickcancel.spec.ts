import { test, expect } from '@playwright/test';

test('Verify result message after clicking Cancel', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    await dialog.dismiss(); // Click Cancel
  });

  await page.getByText('Click for JS Confirm').click();

  await expect(page.locator('#result'))
    .toHaveText('You clicked: Cancel');
});