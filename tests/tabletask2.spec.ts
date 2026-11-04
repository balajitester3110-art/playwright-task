import { test, expect } from '@playwright/test';

test('Print alternate rows', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/tables');

  const rows = page.locator('#table1 tbody tr');
  const rowCount = await rows.count();

  // Print alternate rows (1st, 3rd, 5th...)
  for (let i = 0; i < rowCount; i += 2) {

    const cells = rows.nth(i).locator('td');
     console.log("Total Rows: " + rowCount); 

    console.log(
      await cells.nth(0).textContent(), // Last Name
      await cells.nth(1).textContent(), // First Name
      await cells.nth(2).textContent(), // Email
      await cells.nth(3).textContent(), // Due
      await cells.nth(4).textContent(), // Website
      await cells.nth(5).textContent()  // Action
    );
  }

});