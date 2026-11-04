import { test, expect } from '@playwright/test';

test('Handle country dropdown', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

  await page.locator('select').selectOption({ label: 'India' });

  await expect(page.locator('select')).toHaveValue('IND');
});