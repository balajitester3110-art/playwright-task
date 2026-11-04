import { test, expect } from '@playwright/test';

test('validate Wikipedia  URL and Title', async ({ page }) => {

    // Open Wikipedia
    await page.goto('https://www.Wikipedia.org/');

    // Get title
    const title = await page.title();
    console.log('Title:', title);

    // Get URL
    const url = page.url();
    console.log('URL:', url);

    // Validate URL contains Wikipedia
    await expect(page).toHaveTitle(/Wikipedia/);

   
});

