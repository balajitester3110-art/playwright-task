
import { test,expect } from '@playwright/test';

// test('Task 3 - Retrieve Text from Multiple Nested Frames', async ({ page }) => {

//   await page.goto(
//     'https://the-internet.herokuapp.com/nested_frames'
//   );

//   const topFrame = page.frameLocator(
//     'frame[name="frame-top"]'
//   );

//   const leftText = await topFrame
//     .frameLocator('frame[name="frame-left"]')
//     .locator('body')
//     .innerText();

//   const middleText = await topFrame
//     .frameLocator('frame[name="frame-middle"]')
//     .locator('body')
//     .innerText();

//   const rightText = await topFrame
//     .frameLocator('frame[name="frame-right"]')
//     .locator('body')
//     .innerText();

//   const bottomText = await page
//     .frameLocator('frame[name="frame-bottom"]')
//     .locator('body')
//     .innerText();

//   const frameTexts = [
//     leftText,
//     middleText,
//     rightText,
//     bottomText
//   ];

//   console.log('All Frame Texts:', frameTexts);

// });


// test('Task 4 - Extract Text from Inner iFrame', async ({ page }) => {

//   await page.goto(
//     'https://the-internet.herokuapp.com/nested_frames'
//   );

//   // 2. Access the outer/top frame
//   const outerFrame = page.frameLocator(
//     'frame[name="frame-top"]'
//   );

//   // 3. Access the inner/child frame
//   const innerFrame = outerFrame.frameLocator(
//     'frame[name="frame-middle"]'
//   );

//   // 4. Retrieve text from inner frame
//   const headingText = await innerFrame
//     .locator('body')
//     .innerText();

//   // 5. Print the text
//   console.log(
//     'Inner Frame Text:',
//     headingText
//   );

//   // 6. Verify text
//   expect(headingText.trim()).toBe('MIDDLE');

// });

// test('Extract text from inner iframe', async ({ page }) => {

//   await page.goto(
//     'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe'
//   );

//   const outerFrame = page.frameLocator('#iframeResult');

//   const heading = outerFrame
//     .frameLocator('iframe')
//     .locator('h1');

//   console.log(await heading.textContent());
// });

// test('Count total number of iframes', async ({ page }) => {

//   await page.goto('https://demoqa.com/frames');

//   const iframeCount = await page.locator('iframe').count();

//   console.log('Total iframe count:', iframeCount);
// });

// test('Print all frames', async ({ page }) => {

//   await page.goto('https://the-internet.herokuapp.com/nested_frames');

//   const frames = page.frames();

//   console.log('Left:', await frames[2].locator('body').innerText());
//   console.log('Middle:', await frames[3].locator('body').innerText());
//   console.log('Right:', await frames[4].locator('body').innerText());
//   console.log('Bottom:', await frames[5].locator('body').innerText());

// });

// test('Frame and Alerts', async ({ page }) => {

//   await page.goto('https://demoqa.com/frames');

//   const text = await page.frameLocator('#frame1').locator('body').innerText();
//   console.log(text);

//   await page.getByText('Alerts', { exact: true }).click();

//   await expect(page).toHaveURL(/alerts/);
// });

// test('Verify child frame text', async ({ page }) => {

//   await page.goto('https://demoqa.com/nestedframes');

//   const childFrame = page
//     .frameLocator('#frame1')
//     .frameLocator('iframe');

//   await expect(childFrame.locator('body')).toHaveText(/Child Iframe/);

// });

// test('Edit text inside iframe', async ({ page }) => {

//   await page.setContent(`
//     <iframe id="myFrame"
//       srcdoc="<input id='name' value='Old Text'>">
//     </iframe>
//   `);

//   const frame = page.frameLocator('#myFrame');

//   const input = frame.locator('#name');

//   await input.fill('Hello Playwright');

//   await expect(input).toHaveValue('Hello Playwright');

//   console.log('Text:', 'Hello Playwright');
//   console.log('Character Count:', 'Hello Playwright'.length);
// });

test('Verify iframe text and size', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');

  const frame = page.frameLocator('#frame1');

  const text = await frame.locator('h1').innerText();
  console.log('Text:', text);

  await expect(frame.locator('h1')).toHaveText('This is a sample page');

  const box = await page.locator('#frame1').boundingBox();

  console.log('Width:', box?.width);
  console.log('Height:', box?.height);

  expect(box?.width).toBeGreaterThan(0);
  expect(box?.height).toBeGreaterThan(0);

});