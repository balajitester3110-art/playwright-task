import { test, expect } from '@playwright/test';

test('Frames task', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  // Verify iframe is visible
  await expect(page.locator('#frame1')).toBeVisible();

  // Read text inside iframe
  const text = await page
    .frameLocator('#frame1')
    .locator('#sampleHeading')
    .textContent();

  console.log(text);

  expect(text).toBe('This is a sample page');

  // Verify page heading
  await expect(
    page.getByRole('heading', { name: 'Frames' })
  ).toBeVisible();

  await page.screenshot({
    path: 'frames.png',
    fullPage: true,
  });
});