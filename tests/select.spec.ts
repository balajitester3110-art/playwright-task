import { test } from '@playwright/test'; 
test('Select option', async ({ page }) => { 
await page.goto('https://demoqa.com/select-menu/'); 
await page.locator('#oldSelectMenu').selectOption({ label: 'Red' }); 
await page.waitForTimeout(3000); 
});
