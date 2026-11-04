
import { Page, expect } from '@playwright/test';

export class Baseclass {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  
  //  PAGE 
  // 

  // 1. Open URL
  async openurl(url: string) {
    await this.page.goto(url);
  }

  // 2. Get Page Title
  async gettitle() {
    return await this.page.title();
  }

  // 3. Get Current URL
  async geturl() {
    return await this.page.url();
  }

  // 4. Reload Page
  async reload() {
    await this.page.reload();
  }

  // 5. Go Back
  async goback() {
    await this.page.goBack();
  }

  // 6. Go Forward
  async goforward() {
    await this.page.goForward();
  }


  // 
  // LOCATOR
  // 

  // 7. Fill Text
  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  // 8. Click
  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  // 9. Double Click
  async doubleClick(locator: string) {
    await this.page.locator(locator).dblclick();
  }

  // 10. Right Click
  async rightClick(locator: string) {
    await this.page.locator(locator).click({
      button: 'right'
    });
  }

  // 11. Hover
  async hover(locator: string) {
    await this.page.locator(locator).hover();
  }

  // 12. Clear
  async clear(locator: string) {
    await this.page.locator(locator).clear();
  }

  // 13. Focus
  async focus(locator: string) {
    await this.page.locator(locator).focus();
  }

  // 14. Press Key
  async press(locator: string, key: string) {
    await this.page.locator(locator).press(key);
  }

  // 15. Scroll
  async scroll(locator: string) {
    await this.page
      .locator(locator)
      .scrollIntoViewIfNeeded();
  }


  //
  // CHECKBOX / RADIO
  // 

  // 16. Check
  async check(locator: string) {
    await this.page.locator(locator).check();
  }

  // 17. Uncheck
  async uncheck(locator: string) {
    await this.page.locator(locator).uncheck();
  }

  // 18. Is Checked
  async isChecked(locator: string) {
    return await this.page.locator(locator).isChecked();
  }


  // 
  // DROPDOWN
  // 

  // 19. Select By Label
  async selectByLabel(locator: string, value: string) {
    await this.page
      .locator(locator)
      .selectOption({
        label: value
      });
  }

  // 20. Select By Value
  async selectByValue(locator: string, value: string) {
    await this.page
      .locator(locator)
      .selectOption(value);
  }

  // 21. Select By Index
  async selectByIndex(locator: string, index: number) {
    await this.page
      .locator(locator)
      .selectOption({
        index: index
      });
  }


  
  // GET TEXT / VALUE / ATTRIBUTE
  

  // 22. Get Text
  async getText(locator: string) {
    return await this.page
      .locator(locator)
      .textContent();
  }

  // 23. Get Inner Text
  async getInnerText(locator: string) {
    return await this.page
      .locator(locator)
      .innerText();
  }

  // 24. Get Input Value
  async getInputValue(locator: string) {
    return await this.page
      .locator(locator)
      .inputValue();
  }

  // 25. Get Attribute
  async getAttribute(
    locator: string,
    attribute: string
  ) {
    return await this.page
      .locator(locator)
      .getAttribute(attribute);
  }

  // 26. Get Page Content
  async getPageContent() {
    return await this.page.content();
  }

  // 27. Count Elements
  async count(locator: string) {
    return await this.page
      .locator(locator)
      .count();
  }


  
  // ELEMENT STATUS

  // 28. Is Visible
  async isVisible(locator: string) {
    return await this.page
      .locator(locator)
      .isVisible();
  }

  // 29. Is Enabled
  async isEnabled(locator: string) {
    return await this.page
      .locator(locator)
      .isEnabled();
  }

  // 30. Is Disabled
  async isDisabled(locator: string) {
    return await this.page
      .locator(locator)
      .isDisabled();
  }


  
  // WAIT METHODS

  // 31. Wait For Element
  async waitForElement(locator: string) {
    await this.page
      .locator(locator)
      .waitFor();
  }

  // 32. Wait For URL
  async waitForURL(url: string) {
    await this.page.waitForURL(url);
  }

  // 33. Wait For Load
  async waitForLoad() {
    await this.page.waitForLoadState('load');
  }

  // 34. Wait For Network Idle
  async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }


  // ASSERTIONS

  // 35. Verify Title
  async verifyTitle(title: string) {
    await expect(this.page)
      .toHaveTitle(title);
  }

  // 36. Verify URL
  async verifyURL(url: string) {
    await expect(this.page)
      .toHaveURL(url);
  }

  // 37. Verify Visible
  async verifyVisible(locator: string) {
    await expect(
      this.page.locator(locator)
    ).toBeVisible();
  }

  // 38. Verify Text
  async verifyText(
    locator: string,
    text: string
  ) {
    await expect(
      this.page.locator(locator)
    ).toContainText(text);
  }

  // 39. Verify Input Value
  async verifyValue(
    locator: string,
    value: string
  ) {
    await expect(
      this.page.locator(locator)
    ).toHaveValue(value);
  }


  // ALERT / DIALOG

  // 40. Accept Alert
  async acceptAlert() {
    this.page.once(
      'dialog',
      async (dialog) => {
        await dialog.accept();
      }
    );
  }


  // SCREENSHOT / PDF

  // 41. Screenshot
  async screenshot(path: string) {
    await this.page.screenshot({
      path: path,
      fullPage: true
    });
  }

  // 42. Generate PDF
  async pdf(path: string) {
    await this.page.pdf({
      path: path
    });
  }


  // IFRAME

  // 43. Iframe Fill
  async iframeFill(
    frame: string,
    locator: string,
    value: string
  ) {
    await this.page
      .frameLocator(frame)
      .locator(locator)
      .fill(value);
  }

  // 44. Iframe Click
  async iframeClick(
    frame: string,
    locator: string
  ) {
    await this.page
      .frameLocator(frame)
      .locator(locator)
      .click();
  }

  // 45. Iframe Get Text
  async iframeGetText(
    frame: string,
    locator: string
  ) {
    return await this.page
      .frameLocator(frame)
      .locator(locator)
      .textContent();
  }
  // TAB / WINDOW HANDLING

  // 46. Get New Page
  async getNewPage() {
    return await this.page.context()
      .waitForEvent('page');
  }

  // 47. Switch To New Page
  async switchToNewPage() {
    const pages = this.page.context().pages();
    return pages[pages.length - 1];
  }

  // LOCATOR 

  // 48. Click First Element
  async clickFirst(locator: string) {
    await this.page
      .locator(locator)
      .first()
      .click();
  }

  // 49. Click Last Element
  async clickLast(locator: string) {
    await this.page
      .locator(locator)
      .last()
      .click();
  }

  // 50. Click Nth Element
  async clickNth(
    locator: string,
    index: number
  ) {
    await this.page
      .locator(locator)
      .nth(index)
      .click();
  }

}

