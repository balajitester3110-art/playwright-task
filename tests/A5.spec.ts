import { test, expect } from '@playwright/test';

test('Dismiss Prompt Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.dismiss());

  await page.getByText('Click for JS Prompt').click();

  await expect(page.locator('#result')).toHaveText('You entered: null');
});