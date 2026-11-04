import { test, expect } from '@playwright/test';

test('validate flipkart  URL and Title', async ({ page }) => {

    // Open Flipkart
    await page.goto('https://www.Flipkart.com/');

    // Get title
    const title = await page.title();
    console.log('Title:', title);

    // Get URL
    const url = page.url();
    console.log('URL:', url);

    // Validate URL contains Flipkart
    await expect(page).toHaveURL(/Flipkart/);
   
});

