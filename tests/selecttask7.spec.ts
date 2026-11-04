import { test, expect } from '@playwright/test';

test('Verify default selected option', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  console.log(await page.locator('#dropdown').inputValue());

  await expect(page.locator('#dropdown')).toHaveValue('');
  await page.waitForTimeout(3000);
});