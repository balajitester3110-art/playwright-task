import { test,chromium } from "@playwright/test";

test('Handle Multiple Browser Contexts', async () => {

    // Launch browser
    const browser = await chromium.launch();

    // Create the first browser context
    const context1 = await browser.newContext();

    // Create a page in the first context
    const googlePage = await context1.newPage();

    // Open Google
    await googlePage.goto('https://www.google.com');

    // Create the second browser context
    const context2 = await browser.newContext();

    // Create a page in the second context
    const amazonPage = await context2.newPage();

    // Open Amazon
    await amazonPage.goto('https://www.amazon.com');

    // Extract URLs from both pages
    const googleUrl = googlePage.url();
    const amazonUrl = amazonPage.url();

    // Print the URLs
    console.log('Google URL:', googleUrl);
    console.log('Amazon URL:', amazonUrl);

    // Close the browser
    await browser.close();
});

