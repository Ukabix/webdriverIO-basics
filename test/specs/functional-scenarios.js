const expectChai = require('chai').expect;

describe('Functional Scenarios Test Suite', async () => {

  // scrolling and mouse hover
  it('scroll and mouse hover', async ()=>{
    // open page
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    // go fullscreen
    await browser.fullscreenWindow();
    // scroll down to element
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    // mouse over
    await $("#mousehover").moveTo();
    await browser.pause(3000);
    // press top from hover menu
    await $("=Top").click();
    await browser.pause(3000);
  });
});