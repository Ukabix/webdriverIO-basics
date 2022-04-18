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
    // multiple elements
    // $$ Get all matching elements
    // const radioButtons = await $$(".radiotextsty");
    // const userDropdown = radioButtons[1];
    // await userDropdown.click();
    // reach parent element - chain elements
    const radioButtons1 = await $$(".customradio");
    // span = child element
    await radioButtons1[1].$("span").click();
    await browser.pause(3000);



  });
});
