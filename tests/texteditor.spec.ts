import { test, expect } from '@playwright/test';

test('Edit text inside TinyMCE iframe', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  // Switch to the iframe
  const frame = page.frameLocator('#mce_0_ifr');

  // Locate the editor
  const editor = frame.locator('#tinymce');

  // Clear the existing text
  await editor.click();
  await editor.clear();

  // Type your full name
  const fullName = 'John Doe'; // Replace with your full name
  await editor.fill(fullName);

  // Verify the entered text
  await expect(editor).toHaveText(fullName);

  // Take a screenshot
  await page.screenshot({
    path: 'screenshots/iframe-editor.png',
    fullPage: true,
  });
});