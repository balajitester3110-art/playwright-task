import { test, expect } from '@playwright/test';

test('Open the child window twice', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');

  // Open first child window
  const [firstChild] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  await firstChild.waitForLoadState();
  console.log('First Child URL:', firstChild.url());

  // Return to parent page
  await page.bringToFront();

  // Open second child window
  const [secondChild] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('text=Click Here').click(),
  ]);

  await secondChild.waitForLoadState();
  console.log('Second Child URL:', secondChild.url());

  // Verify new child window opened
  expect(secondChild).not.toBe(firstChild);
  expect(secondChild.url()).toContain('/windows/new');
});