import {test,expect} from '@playwright/test';
test('alert with ok', async ({page}) => {
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//Enable alert 
page.once('dialog', dialog => { 
dialog.accept(); 
}); 
await page.locator('button:has-text("Click for JS Alert")').click(); 
await page.waitForTimeout(3000) });


