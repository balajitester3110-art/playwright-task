import { test, expect } from '@playwright/test';

test('Frame demo', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  const frame = page.frameLocator('#frame1');
  const heading = frame.locator('#sampleHeading');

    // Wait until the heading is visible
    await expect(heading).toBeVisible();

    // Get the text
    const headingText = await heading.innerText();

    expect(headingText).toContain('This is a sample page');

    console.log('Heading:', headingText);
    console.log('Heading Length:', headingText.length);
  });