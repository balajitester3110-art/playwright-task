




































import { test, expect } from '@playwright/test';

test('Handle nested frames', async ({ page }) => {
  await page.goto('https://demoqa.com/nestedframes');
  const parentFrame = page.frameLocator('#frame1');
  const parentText = await parentFrame.locator('body').textContent();
  console.log( parentText);
  const childFrame = parentFrame.frameLocator('iframe');
  const childText = await childFrame.locator('body').textContent();
  console.log(childText);
  expect(parentText).not.toBe(childText)});
