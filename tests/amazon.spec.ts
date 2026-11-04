import { test, expect } from '@playwright/test';

test('validate Amazon title and URL', async ({ page }) => {

    // Open Amazon
    await page.goto('https://www.amazon.com/');

    // Get title
    const title = await page.title();
    console.log('Title:', title);

    // Get URL
    const url = page.url();
    console.log('URL:', url);

    // Validate URL and title
    await expect(page).toHaveURL(/amazon/);
    await expect(page).toHaveTitle(/Amazon/);
});
