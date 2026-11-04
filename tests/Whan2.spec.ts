import { test, chromium } from '@playwright/test';

test('Handle Multiple Tabs', async () => {

  // Launch the browser
  const browser = await chromium.launch();

  // Create a new browser context
  const context = await browser.newContext();

  // Open Google in the primary tab
  const googlePage = await context.newPage();
  await googlePage.goto('https://www.google.com');

  // Open Amazon in the second tab
  const amazonPage = await context.newPage();
  await amazonPage.goto('https://www.amazon.com');

  // Get all pages/tabs in the context
  const pages = context.pages();

  // Print total number of opened tabs
  console.log('Total tabs:', pages.length);

  // Close the browser
  await browser.close();
});

