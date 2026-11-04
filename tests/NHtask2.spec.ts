import { test, expect } from '@playwright/test';

test('Facebook - 10 Relative XPath Locators', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await expect(page.locator('//input[@id="R_1h6kqsqppb6amH1"]')).toBeVisible();

  await expect(page.locator('//input[@type="password"]')).toBeVisible();

  await expect(page.locator('//button[@name="login"]')).toBeVisible();

  await expect(page.locator('//a[contains(@href,"recover")]')).toBeVisible();

  await expect(page.locator('//a[@data-testid="open-registration-form-button"]')).toBeVisible();

  await expect(page.locator('//img[contains(@alt,"Facebook")]')).toBeVisible();

  await expect(page.locator('//input[contains(@id,"email")]')).toBeVisible();

  await page.locator('//input[@id="R_1h6kqsqppb6amH1"]').fill('test@example.com');
  await page.locator('//input[@id="pass"]').fill('password123');
});