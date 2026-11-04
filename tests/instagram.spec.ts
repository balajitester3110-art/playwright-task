import { test, expect } from '@playwright/test';

test('validate title and print',async ({page}) => {
//open instagram

    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(3000)

    // gettitle
    const title = await page.title()
    console.log(title)

    // geturl
    const url = await page.url()
    console.log(url)

    // validate url and title
    expect(page).toHaveTitle(/Instagram/);
    await page.waitForTimeout(3000)




});
