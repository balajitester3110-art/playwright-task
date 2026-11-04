import { test } from '@playwright/test';

test('multi select option', async ({ page }) => {

await page.goto('https://demoqa.com/select-menu/');

await page.locator('#cars').selectOption(['opel', 'Audi' ]);

const selected = await page.locator('#cars option:checked').allTextContents();

console.log(selected);

  await page.waitForTimeout(3000);

});