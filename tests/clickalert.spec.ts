import { test } from '@playwright/test';

test('Capture simple alert message', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  const dialogPromise = page.waitForEvent('dialog');

  await page.click('#alertButton');

  const dialog = await dialogPromise;
  console.log('Alert Message:', dialog.message());

  await dialog.accept();
});