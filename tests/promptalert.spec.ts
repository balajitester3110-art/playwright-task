import { test, expect } from '@playwright/test';

test('Handle prompt alert and enter value', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    await dialog.accept('balaji'); // Enter text in prompt
  });

  await page.getByText('Click for JS Prompt').click();

  await expect(page.locator('#result'))
    .toHaveText('You entered: balaji');
});
