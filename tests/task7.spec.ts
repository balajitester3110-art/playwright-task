import { test, expect } from '@playwright/test';

test('Nested iframe simple', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');

  const frame = page.frameLocator('#iframeResult').frameLocator('iframe');

  await expect(frame.locator('h1')).toHaveText('This page is displayed in an iframe');

  console.log("H1 verified inside iframe");

});