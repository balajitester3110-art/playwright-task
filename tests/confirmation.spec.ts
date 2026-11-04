import { test, expect } from '@playwright/test';

test('Handle Confirmation Alert - Click OK', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept(); // Click OK
  });

  await page.getByText('Click for JS Confirm').click();

  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});