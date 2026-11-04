import { test } from '@playwright/test';

test('Open three websites and print titles', async ({ page }) => {
  // Open Google
  await page.goto('https://www.google.com/');
  const googleTitle = await page.title();
  console.log('Google Title:', googleTitle);

  // Open Amazon
  await page.goto('https://www.amazon.com/');
  const amazonTitle = await page.title();
  console.log('Amazon Title:', amazonTitle);

  // Open GitHub
  await page.goto('https://www.github.com/');
  const githubTitle = await page.title();
  console.log('GitHub Title:', githubTitle);
});
