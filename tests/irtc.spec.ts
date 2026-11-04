import { test,expect} from '@playwright/test';

test('IRCTC custom dropdown handling', async ({ page }) => {

  await page.goto('https://www.irctc.co.in/nget/train-search');
  await page.locator('#origin').fill('chennai');
  await page.waitForTimeout(3000);
 const dropdown1=page.locator('#origin li');
  await expect(dropdown1.first()).toBeVisible();
 await dropdown1.first().click();
  await page.waitForTimeout(3000);
  // await page.locator('button:has-text("English")').click();
  // await page.locator('button:has-text("OK")').click();
  // await page.locator('p-dropdown[formcontrolname="journeyClass"]').click();
  // await page.locator('li[aria-label="SL"]').click();
  // await page.waitForTimeout(3000);

});