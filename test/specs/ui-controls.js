describe('UI Controls Test Suite', async () => {
  // xit disables test
  
  it('UI Controls', async ()=> {
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

    //// DROPDOWNS
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



    await browser.pause(3000);



  });
});
