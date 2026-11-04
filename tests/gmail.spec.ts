import { test } from '@playwright/test'; 
test('Gmail Login', async ({ page }) => { 
await page.goto('https://practice.expandtesting.com/login/'); 
await page.locator("//input[@name='username']").fill("your_email@gmail.com"); 
await page.locator("//input[@type='password']").fill("xyz"); 
await page.locator("//span[text()='Next']").click(); 
});