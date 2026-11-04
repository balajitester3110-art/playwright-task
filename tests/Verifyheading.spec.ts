import { test, expect } from '@playwright/test';

test('Verify heading inside Frame 1', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  const frame = page.frameLocator('#frame1');

  const heading = frame.locator('#sampleHeading');

  const text = await heading.textContent();

  console.log('Frame1 Text:', text);

  await expect(heading).toContainText('This is a sample page');

  // Print the heading length
  console.log('Heading Length:', text?.length);

  // Take a screenshot
  await page.screenshot({
    path: 'screenshots/iframe.png',
    fullPage: true,
  });
});