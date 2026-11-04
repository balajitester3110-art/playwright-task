import { test, expect } from '@playwright/test';

test('Handle Confirmation Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.accept());

  await page.getByText('Click for JS Confirm').click();

  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
