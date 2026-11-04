import { test } from '@playwright/test';

test('Nested frames object simple', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  const obj = {
    left: await page.frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-left"]')
      .locator('body').textContent(),

    middle: await page.frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-middle"]')
      .locator('#content').textContent(),

    right: await page.frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-right"]')
      .locator('body').textContent(),

    bottom: await page.frameLocator('frame[name="frame-bottom"]')
      .locator('body').textContent()
  };

  console.log(obj);

});