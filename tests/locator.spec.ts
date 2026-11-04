import { test, expect } from '@playwright/test';

test('Facebook Login', async ({ page }) => {

  await page.goto('https://www.facebook.com/');

  await page.locator("//input[@name='email']").fill("test@gmail.com");

  await page.locator("//input[@name='pass']").fill("Password123");

  await page.getByRole('button', { name: 'Log in' }).click();

});    