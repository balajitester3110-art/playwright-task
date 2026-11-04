import { test, expect } from '@playwright/test';

test('fetch the text inside',async ({ page }) => {

await page.goto('https://demoqa.com/frames');
await page.waitForTimeout(3000);


const frame = page.frameLocator('#frame1');

const text = await frame.locator('#sampleHeading').textContent();

console.log("Frame1 Text:", text);



await page.screenshot ({

    path: 'screenshots/iframe.png'

});
});