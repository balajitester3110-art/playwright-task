import { test, expect } from '@playwright/test';

test('Handle static dropdown using selectOption()', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  // Select "Purple" from the Old Style Select Menu
  await page.locator('#oldSelectMenu').selectOption({ label: 'Purple' });

  // Verify selected value
  await expect(page.locator('#oldSelectMenu')).toHaveValue('4');

  await page.waitForTimeout(3000);
});