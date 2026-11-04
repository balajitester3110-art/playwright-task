import { test, expect } from '@playwright/test';

test('Dropdown Validation', async ({ page }) => {

  await page.goto('https://demoqa.com/select-menu');

  const dropdown = page.locator('#oldSelectMenu');

  await dropdown.selectOption({ index: 4 });

  await page.waitForTimeout(3000);

});