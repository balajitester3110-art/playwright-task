import { test } from '@playwright/test';
test('Handle Simple ALert', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.once('dialog', dialog => {
dialog.accept();
});
 await page.locator('button:has-text("Click for JS Alert")').click();
await page.waitForTimeout(3000)

});