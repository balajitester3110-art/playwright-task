import { test, expect } from "@playwright/test";
import user from "./datadriven/user.json";

test("Login with first user", async ({ page }) => {
  await page.goto("https://facebook.com");

  await page.fill("#username", user[0].userName);
  await page.fill("#password", user[0].pass);

  await page.click("button[type='submit']");
});
