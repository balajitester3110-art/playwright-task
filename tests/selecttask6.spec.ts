import{test} from '@playwright/test';
test('Count total dropdown options', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const count= await page.locator('#dropdown').count();
    console.log('total options:',count);

});