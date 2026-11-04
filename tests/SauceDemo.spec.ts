import { test, expect } from '@playwright/test';

test('SauceDemo ', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await expect(page.locator("//input[@id='user-name']")).toBeVisible();

  await expect(page.locator("//input[@name='user-name']")).toBeVisible();

  await expect(page.locator("//input[@placeholder='Username']")).toBeVisible();

  await expect(page.locator("//input[@id='password']")).toBeVisible();

  await expect(page.locator("//input[@placeholder='Password']")).toBeVisible();

  await expect(page.locator("//input[@id='login-button']")).toBeVisible();

  await expect(page.locator("//input[@value='Login']")).toBeVisible();

  await expect(page.locator("//input[@type='submit']")).toBeVisible();

  await expect(page.locator("//div[@class='login_logo']")).toBeVisible();

  await expect(page.locator("//form")).toBeVisible();

  await page.locator("//input[@id='user-name']").fill("standard_user");
  await page.locator("//input[@id='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();

  await expect(page).toHaveURL(/inventory.html/);
});