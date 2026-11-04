
import { test, expect } from '@playwright/test';
import { Baseclass } from './baseclass';

test('SauceDemo Reusable Methods Test', async ({ page }) => {

  // Create Baseclass object
  const reusable = new Baseclass(page);


  // // 1. Open SauceDemo
  // await reusable.openurl(
  //   'https://the-internet.herokuapp.com/iframe'
  // );


  // // =====================================================
  // // IFRAME HANDLING
  // // =====================================================

  // // 2. Open iframe website
  // await reusable.openurl(
  //   'https://the-internet.herokuapp.com/iframe'
  // );

  // // 3. Verify iframe URL
  // await reusable.verifyURL(
  //   'https://the-internet.herokuapp.com/iframe'
  // );

  // // 4. Get text from iframe
  // const iframeText =
  //   await reusable.iframeGetText(
  //     '#mce_0_ifr',
  //     'body'
  //   );

  // console.log(
  //   'Iframe Text:',
  //   iframeText
  // );

  // // 5. Verify iframe text
  // expect(iframeText).toContain(
  //   'Your content goes here.'
  // );

  // // 6. Screenshot
  // await reusable.screenshot(
  //   'screenshots/iframe.png'
  // );


//   // =====================================================
//   // WINDOW / TAB HANDLING
//   // =====================================================

  // 7. Open DemoQA Browser Windows
  await reusable.openurl(
    'https://demoqa.com/browser-windows'
  );

  // 8. Wait for page load
  await reusable.waitForLoad();

  // 9. Wait for new tab
  const newPagePromise =
    reusable.getNewPage();

  // 10. Click New Tab
  await reusable.click(
    '#tabButton'
  );

  // 11. Get new tab
  const newPage =
    await newPagePromise;

  // 12. Wait for new tab to load
  await newPage.waitForLoadState();

  // 13. Get new tab URL
  const newPageURL =
    await newPage.url();

  console.log(
    'New Tab URL:',
    newPageURL
  );

  // 14. Verify new tab URL
  expect(newPageURL).toContain(
    'demoqa.com/sample'
  );

  // 15. Get new tab title
  const newPageTitle =
    await newPage.title();

  console.log(
    'New Tab Title:',
    newPageTitle
  );

  // 16. Get text from new tab
  const newTabText =
    await newPage
      .locator('#sampleHeading')
      .innerText();

  console.log(
    'New Tab Text:',
    newTabText
  );

  // 17. Verify new tab text
  expect(newTabText).toContain(
    'This is a sample page'
  );

  // 18. Close new tab
  await newPage.close();


  // SCREENSHOT

  await reusable.screenshot(
    'screenshots/final-page.png'
  );

//   console.log(
//     'Test completed successfully'
//   );

});

