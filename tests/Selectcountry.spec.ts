import { test, expect } from '@playwright/test';
import { reusablemethod } from './testresources/resuablemethod';
test('Select India from country dropdown', async ({ page }) => {
   const obj=new reusablemethod(page);
    await obj.openurl('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

await obj.select ('select', 'India');
 // await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

  //await page.locator('select').selectOption({ label: 'India' });
  await page.waitForTimeout(3000);
})