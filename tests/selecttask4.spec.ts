import { test, expect } from '@playwright/test';

test('Verify selected dropdown option', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.locator('#oldSelectMenu').selectOption('3');

  console.log(await page.locator('#oldSelectMenu').inputValue());

  await expect(page.locator('#oldSelectMenu')).toHaveValue('3');
  await page.waitForTimeout(3000);

});
