import { test, expect } from '@playwright/test';

test('Print the last column of all rows', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/tables');

  const rows = page.locator('#table1 tbody tr');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount-1; i++) {
    const lastColumnData = await rows.nth(i).locator('td').last().textContent();
    console.log(lastColumnData);
  }

});