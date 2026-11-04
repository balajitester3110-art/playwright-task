import { test, expect } from '@playwright/test';

test('Select an option using its index', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.locator('#oldSelectMenu').selectOption({ index: 2 });

  console.log(await page.locator('#oldSelectMenu').inputValue());
});