import { test } from '@playwright/test';

test('Nested Frames', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  let arr = [];

  arr.push(await page.frameLocator('frame[name="frame-top"]')
    .frameLocator('frame[name="frame-left"]')
    .locator('body').textContent());

  arr.push(await page.frameLocator('frame[name="frame-top"]')
    .frameLocator('frame[name="frame-middle"]')
    .locator('#content').textContent());

  arr.push(await page.frameLocator('frame[name="frame-top"]')
    .frameLocator('frame[name="frame-right"]')
    .locator('body').textContent());

  arr.push(await page.frameLocator('frame[name="frame-bottom"]')
    .locator('body').textContent());

  console.log(arr);

});