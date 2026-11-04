import { test, expect } from '@playwright/test';

test('Count iframes', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');

  const iframes = page.locator('iframe');

  console.log("Total iframes:", await iframes.count());

  console.log(await iframes.nth(0).getAttribute('id'));
  console.log(await iframes.nth(1).getAttribute('id'));

  await expect(iframes).toHaveCount(2);

});