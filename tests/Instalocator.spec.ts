import { test } from '@playwright/test';

test('Instagram Login', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.instagram.com/accounts/login/', {
    waitUntil: 'domcontentloaded',
  });

  const user = page.getByLabel('Phone number, username, or email');
  const pass = page.getByLabel('Password');

  await user.waitFor();
  await user.fill('test@gmail.com');

  await pass.fill('Password123');

  await page.getByRole('button', { name: 'Log in' }).click();
});