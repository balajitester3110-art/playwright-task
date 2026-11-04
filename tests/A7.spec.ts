import { test } from '@playwright/test';

test('Print Confirmation Alert Message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => {
    console.log(dialog.message());
    dialog.accept();
  });

  await page.getByText('Click for JS Confirm').click();
});