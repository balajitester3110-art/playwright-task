import { test, expect } from '@playwright/test';

test('validate Instagram URL', async ({ page }) => {

    // Open Instagram
    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(3000);

    // Get URL
    const url = page.url();
    console.log(url);

    // Verify URL contains "instagram"
    expect(url).toContain('instagram');

    await page.waitForTimeout(3000);
});
