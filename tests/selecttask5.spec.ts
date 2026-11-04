import { test } from '@playwright/test';
test('Print all dropdown options', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const options = await page.locator('#dropdown option').all();

  for (const option of options) {
    console.log(await option.textContent());
  }

  await page.waitForTimeout(3000);
});
