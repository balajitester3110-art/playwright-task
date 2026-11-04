import { test } from '@playwright/test';

test('Print Alert Message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByText('Click for JS Alert').click();
});