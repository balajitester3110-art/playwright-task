import { test, expect } from '@playwright/test';

test('Verify Prompt Input', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.accept('Automation Tester'));

  await page.getByText('Click for JS Prompt').click();

  await expect(page.locator('#result')).toHaveText('You entered: Automation Tester');
});