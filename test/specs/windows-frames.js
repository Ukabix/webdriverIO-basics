const expectchai = require('chai').expect;

describe('Windows and frames Test suite', async () => {
  it('Handle new windows', async () => {
    // open page
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // go fullscreen
    await browser.fullscreenWindow();
    // click link
    await $(".blinkingText").click();
    // get window handle
    const pageHandles = await browser.getWindowHandles(); // returns array - 2 windows
    // switch page - pass window handle
    await browser.switchToWindow(pageHandles[1]);
    // use title to check if we are on second page
    console.log(await browser.getTitle());
    // const newPageh1text = await $("h1").getText();
    // await expect(newPageh1text).toHaveTextContaining("DOCUMENTS");
    // close window - call before switching back
    await browser.closeWindow();
    // back to main window
    await browser.switchToWindow(pageHandles[0]);
    console.log(await browser.getTitle());



  });
});
