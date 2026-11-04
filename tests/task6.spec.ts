import { test, expect } from '@playwright/test';

test('Iframe simple test', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frame = page.frameLocator('frame[src="frame_1.html"]');

  const text = "I am from Chennai and learning Playwright";

  await frame.locator('input[name="mytext1"]').fill(text);

  await expect(frame.locator('input[name="mytext1"]')).toHaveValue(/Chennai/);

  console.log("Characters:", text.length);

});