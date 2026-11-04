import { test, expect } from '@playwright/test';

test('Open Mankatha songs page', async ({ page }) => {
  await page.goto('https://www.masstamilan.dev/mankatha-songs-2');

  // Wait for page load
  await page.waitForLoadState('domcontentloaded');

  // Verify page opened correctly
  await expect(page).toHaveURL(/mankatha-songs-2/);

  // Example: locate song links (adjust selector based on DOM)
  const songLinks = page.locator('a');

  await expect(songLinks.first()).toBeVisible();

  // Click first available song/download link
  await songLinks.first().click();
});