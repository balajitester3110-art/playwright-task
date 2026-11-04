import { test } from '@playwright/test';

test('Read web table using nested for loop', async ({ page }) => {

  // Navigate to webpage containing table
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Get number of rows
  const rows = await page.locator('#table1 tbody tr').count();

  // Get number of columns
  const columns = await page.locator('#table1 tbody tr').first().locator('td').count();

  // Nested for loop to read rows and columns
  for (let i = 0; i < rows; i++) {

    let rowData = '';

    for (let j = 0; j < columns; j++) {

      const cellData = await page
        .locator('#table1 tbody tr')
        .nth(i)
        .locator('td')
        .nth(j)
        .innerText();

      rowData = rowData + cellData + ' | ';
    }

    console.log(rowData);
  }

});