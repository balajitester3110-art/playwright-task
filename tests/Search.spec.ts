import { test, expect } from '@playwright/test';

test('Search YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  const searchBox = page.locator('input[name="search_query"]');
  await expect(searchBox).toBeVisible();

  await searchBox.fill('rahman song');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/results/);
  await expect(page.locator('ytd-video-renderer').first()).toBeVisible();
});