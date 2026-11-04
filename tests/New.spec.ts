import { test } from '@playwright/test';
import { reusablemethod } from './testresources/resuablemethod';

test('Demo', async ({ page }) => {

    const obj = new reusablemethod(page);

    await obj.openurl(" https://www.facebook.com");

    await obj.enterText("//input[@id='username']", "Balaji");
    await obj.enterText("//input[@id='password']", "Password");

    await obj.click("//button");

    await obj.hover("//a[text()='Home']");

    await obj.press("//input[@id='username']", "Tab");

    console.log(await obj.getText("//h1"));

    console.log(await obj.getAttribute("//img", "src"));

    await obj.scroll("//footer");

    await obj.keyboardPress("Enter");

    await obj.waitForLoad();

    await obj.src();

    await obj.closebrowser();
});