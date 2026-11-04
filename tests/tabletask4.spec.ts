import { test, expect } from '@playwright/test';

test('Print table count', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/tables');

  const tables = page.locator('table');
  const tableCount = await tables.count();

  console.log("Total Tables: " + tableCount);

});