import { test, expect } from '@playwright/test'; 
    
test(' Select "India" from country dropdown selectOption()', async ({ page }) => { 

 await page.goto('https://demoqa.com/select-menu');

  await page.locator('#oldSelectMenu').selectOption({ label: 'india' }); 

  await expect(page.locator('#oldSelectMenu')).toHaveValue('4'); 

  await page.waitForTimeout(3000); 

});