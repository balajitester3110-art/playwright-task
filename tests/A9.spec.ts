import { test } from '@playwright/test';

test('Handle Alert and Screenshot', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.accept());

  await page.getByText('Click for JS Alert').click();

  await page.screenshot({ path: 'alert.jpeg' });
});