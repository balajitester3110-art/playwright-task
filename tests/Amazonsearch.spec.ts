import { test } from '@playwright/test'; 
test('Amazon search', async ({ page }) => { 
await page.goto('https://www.amazon.com//'); 
await page.locator('#twotabsearchtextbox').fill('boat earpuds');
await page.locator('.s-suggestion').first().click();
await page.waitForTimeout(3000); 
});
