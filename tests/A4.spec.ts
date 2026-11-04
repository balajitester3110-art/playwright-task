import { test, expect } from '@playwright/test';

test('Handle Prompt Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.accept('Playwright User'));

  await page.getByText('Click for JS Prompt').click();

  await expect(page.locator('#result'))
    .toHaveText('You entered: Playwright User');
});