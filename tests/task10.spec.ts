import { test } from '@playwright/test';

test('Iframe refresh check fixed', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const input = page
    .frameLocator('frame[src="frame_1.html"]')
    .locator('input[name="mytext1"]');
  await input.fill('Hello Chennai');
  await page.reload();
  const after = page
    .frameLocator('frame[src="frame_1.html"]')
    .locator('input[name="mytext1"]');

  const value = await after.inputValue();

  console.log(value.includes('Hello Chennai') ? "Retained" : "Reset");

});