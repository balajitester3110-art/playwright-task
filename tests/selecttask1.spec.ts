import { test, expect } from '@playwright/test';

test('Select dropdown value by visible text', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.locator('#oldSelectMenu').selectOption({ label: 'Purple' });

  await expect(page.locator('#oldSelectMenu')).toHaveValue('4');
});