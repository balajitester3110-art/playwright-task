import { test, expect } from '@playwright/test';

test('Verify Current URL', async ({ page }) => {
  await page.goto('https://www.linkedin.com');

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);

  await expect(page.url()).toContain('linkedin');
});