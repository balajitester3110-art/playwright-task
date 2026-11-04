import { test, expect } from '@playwright/test';

test('Select dropdown value using option value attribute', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.locator('#oldSelectMenu').selectOption({ value: '3' });

  await expect(page.locator('#oldSelectMenu')).toHaveValue('3');

  await expect(page.locator('#oldSelectMenu')).toHaveText(/Yellow/);

await page.waitForTimeout(3000)

});


