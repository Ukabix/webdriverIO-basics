const expectChai = require('chai').expect;

describe('UI Controls Test Suite', async () => {
  // xit disables test
  
  xit('UI Controls', async ()=> {
    // open page
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // input username
    await $("input[name='username']").setValue(
      'rahulshettyacademy'
    );
    // input password
    const password = $("//input[@id='password']");
    await password.setValue('learning');
    
    //// RADIOBOXES
    // multiple elements
    // $$ Get all matching elements
    // const radioButtons = await $$(".radiotextsty");
    // const userDropdown = radioButtons[1];
    // await userDropdown.click();
    // validate popup showing up
    // reach parent element - chain elements
    const radioButtons1 = await $$(".customradio");
    // span = child element
    await radioButtons1[1].$("span").click();
    const waitForModal = await $(".modal-body");
    await waitForModal.waitForDisplayed();
    await $("#cancelBtn").click();
    // query Admin radiobtn selection
    console.log(await $$(".customradio")[0].$("span").isSelected());
    //change radio selection
    await radioButtons1[1].$("span").click();
    await waitForModal.waitForDisplayed();
    await $("#okayBtn").click();
    // validate popup not showing up
    await $$(".customradio")[0].$("span").click();
    await expect(waitForModal).not.toBeDisplayed();

    //// DROPDOWNS - static
    /// validate static dropdowns
    // get element
    const dropDown = await $("select.form-control");
    // select by attribute
    await dropDown.selectByAttribute('value', 'teach');
    // select by text
    await dropDown.selectByVisibleText("Consultant");
    // select by index
    await dropDown.selectByIndex(0);
    // check the value
    await dropDown.getValue();
    
    // CHAI ASSERTIONS
    expectChai(await dropDown.getValue()).to.be.equal("stud");

  });

  xit('Dynamic dropdowns', async ()=> {

    // open webpage
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");

    // get element and autocomplete
    await $('#autocomplete').setValue('ind');
    // wait for data to load properly
    await browser.pause(3000);
    // store options in an array
    // !!!! [class='value'/div] - FOR XPATH
    let items = await $$("[class='ui-menu-item'] div");
    // iterate through the array
    for (var i = 0; i < await items.length; i++) {
      // console.log(await items[i].getText());
      // find the text and click that item
      if (await items[i].getText() === 'India') {
        await items[i].click();
        await browser.pause(3000);
      };
    };
  });

  //// CHECKBOXES
  it('Checkbox identification', async () => {
    // get page
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    // get elements array
    const checkboxElements = await $$("input[type='checkbox']");
    // select 2nd
    await checkboxElements[1].click();
    // check if 2nd is selected and 3rd is not
    // console.log(await checkboxElements[1].isSelected());
    // console.log(await checkboxElements[2].isSelected());
    // assertions
    expectChai(await checkboxElements[1].isSelected()).to.be.true;
    expectChai(await checkboxElements[2].isSelected()).not.to.be.true;
    // SCREENSHOT - take imperatively
    browser.saveScreenshot("validateCheckboxes.png");
  });
});
