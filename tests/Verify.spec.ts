import { test, expect } from '@playwright/test';

test('Verify JS Alert text', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  const dialogPromise = page.waitForEvent('dialog');

  await page.getByText('Click for JS Alert').click();

  const dialog = await dialogPromise;

  expect(dialog.message()).toBe('I am a JS Alert');

  await dialog.accept();
});