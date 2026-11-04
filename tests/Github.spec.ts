import { test, expect } from '@playwright/test';

test('validate GitHub title and URL', async ({ page }) => {

    // Open GitHub
    await page.goto('https://github.com/');
    await page.waitForTimeout(3000);

    // Get title
    const title = await page.title();
    console.log('Title:', title);

    // Get URL
    const url = page.url();
    console.log('URL:', url);

    // Validate URL and title
    await expect(page).toHaveURL(/github/);
    await expect(page).toHaveTitle(/GitHub/);

    await page.waitForTimeout(3000);
});
