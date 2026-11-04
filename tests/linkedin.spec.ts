import { test, expect } from '@playwright/test';

test('validate LinkedIn title and URL', async ({ page }) => {

    // Open LinkedIn
    await page.goto('https://www.linkedin.com/');
    await page.waitForTimeout(3000);

    // Get title
    const title = await page.title();
    console.log('Title:', title);

    // Get URL
    const url = page.url();
    console.log('URL:', url);

    // Verify URL contains "linkedin"
    expect(url).toContain('linkedin');

    // Verify title contains "LinkedIn"
    expect(title).toContain('LinkedIn');

    await page.waitForTimeout(3000);
});


