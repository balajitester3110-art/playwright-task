import { test } from '@playwright/test';

test('Select every dropdown option', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  await page.locator('#dropdown').selectOption('1');
  console.log(await page.locator('#dropdown').inputValue());

  await page.locator('#dropdown').selectOption('2');
  console.log(await page.locator('#dropdown').inputValue());
  await page.waitForTimeout(3000);
});