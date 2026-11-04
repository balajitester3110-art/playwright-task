import { test, expect } from '@playwright/test';

test('Handle Simple Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  await page.locator('button:has-text("Click for JS Alert")').click();

  await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');
});