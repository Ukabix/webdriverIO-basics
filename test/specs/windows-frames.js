const expectchai = require('chai').expect;

describe('Windows and frames Test suite', async () => {
  xit('Handle new window tabs', async () => {
    // open page
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // go fullscreen
    await browser.fullscreenWindow();
    // click link
    await $('.blinkingText').click();
    // get window handle
    const pageHandles =
      await browser.getWindowHandles(); // returns array - 2 windows
    // switch page - pass window handle == tabs
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
  xit('Create new window', async () => {
    // open page
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // go fullscreen
    await browser.fullscreenWindow();
    // click link
    await $('.blinkingText').click();
    // get window handle
    const pageHandles =
      await browser.getWindowHandles();
    // switch page - pass window handle == tabs
    await browser.switchToWindow(pageHandles[1]);
    console.log(await browser.getTitle());
    // close window - call before switching back
    await browser.closeWindow();
    // back to main window
    await browser.switchToWindow(pageHandles[0]);
    console.log(await browser.getTitle());
    // open new window
    await browser.newWindow(
      'https://www.google.com'
    ); // this auto switches to new window
    console.log(await browser.getTitle());
    // go back to previous page
    await browser.switchWindow(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    ); // does not close window, query via browser url bar
    // check if possible to manipulate page switched into
    await $('#username').setValue(
      'after switching back'
    );
    await browser.pause(3000);
  });
  it('Frames manipulation', async () => {
    // open page
    await browser.url(
      'https://rahulshettyacademy.com/AutomationPractice/'
    );
    // go fullscreen
    await browser.fullscreenWindow();
    // scroll down to element to view frame
    await $('#mousehover').scrollIntoView();
    // count all anchor tags
    console.log(await $$("a").length); // 27
    await browser.switchToFrame(await $("[id='courses-iframe']"));
    // get element from frame
    console.log(await $("=Courses").getTagName());
    // count anchor tags in frame
    console.log(await $$("a").length); // 111
    // switch back to main frame
    await browser.switchToFrame(null);
    console.log(await $$("a").length); // 27
  });
});
