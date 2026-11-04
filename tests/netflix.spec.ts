import { test, expect } from '@playwright/test';

test('validate Netflix URL and Title', async ({ page }) => {

    // Open Netflix
    await page.goto('https://www.netflix.com/');

    // Get title
    const title = await page.title();
    console.log('Title:', title);

    // Get URL
    const url = page.url();
    console.log('URL:', url);


   
});
