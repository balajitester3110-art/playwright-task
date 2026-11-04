import { test } from '@playwright/test';
test('Select India using index', async ({ page }) => {

  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

  await page.locator('select').selectOption({ index:5 });

  await page.waitForTimeout(3000);
});
