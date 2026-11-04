import { test, expect } from '@playwright/test';

test('Handle delayed alert and verify text', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // delayed alert using setTimeout in page context
  const dialogPromise = page.waitForEvent('dialog');

  await page.evaluate(() => {
    setTimeout(() => {
      alert('This is a delayed alert');
    }, 2000);
  });

  const dialog = await dialogPromise;

  expect(dialog.message()).toBe('This is a delayed alert');

  await dialog.accept();
});
