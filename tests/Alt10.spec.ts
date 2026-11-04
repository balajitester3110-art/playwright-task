import { test, expect } from '@playwright/test';

test('Verify Alert Result Message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.accept());

  await page.getByText('Click for JS Alert').click();

  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});