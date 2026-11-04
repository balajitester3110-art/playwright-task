import { test } from '@playwright/test';
import { Baseclass } from './testdata/baseclass'; 

test('Login Test', async ({ page }) => {
  const reusable = new Baseclass(page); 

  await reusable.openurl('https://facebook.com');
  const title = await reusable.gettitle();
  console.log('Title:', title);

  await reusable.fill('#username', 'admin');
  await reusable.fill('#password', 'admin123');
  await reusable.click('#login');
});