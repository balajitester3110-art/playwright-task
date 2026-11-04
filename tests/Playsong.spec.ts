import { test, expect } from '@playwright/test';
import { reusablemethod } from './testresources/resuablemethod';
test('validate youtube URL and Title', async ({ page }) => {
 const obj=new reusablemethod(page);
 await obj.openurl('https://www.youtube.com/');
 await obj.searchbox.fill();
 await obj.fillSearch('Tamil Song'');
  // Search for Tamil Song
  const searchBox = page.locator('input[name="search_query"]');
  await expect(searchBox).toBeVisible();

  await searchBox.fill('Tamil Song');
  await searchBox.press('Enter');

  // Verify search results page
  await expect(page).toHaveURL(/results/);

  // Click the first video result
  const firstVideo = page.locator('ytd-video-renderer a#video-title').first();
  await expect(firstVideo).toBeVisible();
  await firstVideo.click();

  // Verify video player is displayed
  await expect(page.locator('video')).toBeVisible();

  // Optional: wait a few seconds while the video plays
  await page.waitForTimeout(1000);
});