const expectChai = require('chai').expect;

describe('Functional Scenarios Test Suite', async () => {
  //// scrolling and mouse hover
  xit('scroll and mouse hover', async () => {
    // open page
    await browser.url(
      'https://rahulshettyacademy.com/AutomationPractice/'
    );
    // go fullscreen
    await browser.fullscreenWindow();
    // scroll down to element
    await $('#mousehover').scrollIntoView();
    await browser.pause(3000);
    // mouse over
    await $('#mousehover').moveTo();
    await browser.pause(3000);
    // press top from hover menu
    await $('=Top').click();
    await browser.pause(3000);
  });

  //// handling js alerts
  it('alert handling', async () => {
    // open page
    await browser.url(
      'http://only-testing-blog.blogspot.com/2014/09/selectable.html'
    );
    // go fullscreen
    await browser.fullscreenWindow();
    // double click element
    await $("button").doubleClick();
    // check if alert is open
    expectChai(await browser.isAlertOpen()).to.be.true;
    // check alert text
    expectChai(await browser.getAlertText()).to.be.string;
    // handle alert click
    await browser.acceptAlert();
    await browser.pause(3000);
  });
});
