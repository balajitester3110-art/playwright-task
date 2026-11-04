import { test, expect } from '@playwright/test';

test('Login Test using getByLabel', async ({ page }) => {
  await page.goto('https://auth.wikimedia.org/enwiki/wiki/Special:UserLogin?useformat=desktop&usesul3=1&returnto=Wikipedia%3ASign+up&experiments%5B0%5D=we-1-8-account-creation-no-desktop-benefits%3Atreatment&centralauthLoginToken=87052495628e1d62fbe92981b5ba289e');

  await page.getByLabel('username').fill('balaji@gmail.com');
  await page.getByLabel('Password').fill('password123');

  await page.getByRole('button', { name: 'Log in' }).click();
});
