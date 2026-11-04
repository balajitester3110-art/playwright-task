import { test, expect } from '@playwright/test';
import { reusablemethod } from './testresources/resuablemethod';
test('validate youtube URL and Title', async ({ page }) => {
 const obj=new reusablemethod(page);
 await obj.openurl('https://www.facebook.com/');
 console.log(await obj.gettitle());
 await obj.fill("//input[@name='email']","test@gmail.com");
 await obj.fill("//input[@name='pass']","password123");
 await obj.click("//span[text()='Log in']");
 await obj.goforward();
 await obj.goback();
 await obj.loginbutton();
 await obj.reload();
 await obj.closebrowser();
 await obj.acceptmsg();
 await obj.alttimeout();
 await obj.altdismiss();
 await obj.alttimeout();

 
 })
    // // Open youtube
    // await page.goto('https://www.Youtube.com/');
    // await page.waitForTimeout(3000);

    // // Get title
    // const title = await page.title();
    // console.log('Title:', title);

    // // Get URL
    // const url = page.url();
    // console.log('URL:', url);

    // // Validate URL and title
    // await expect(page).toHaveURL(/youtube/);
    // await expect(page).toHaveTitle(/youtube/);

    // await page.waitForTimeout(3000);

