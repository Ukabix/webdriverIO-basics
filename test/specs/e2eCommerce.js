describe('Ecommerce app', async () => {
  it('End to end test', async () => {
    // open page
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // max window
    await browser.maximizeWindow();
    // input username
    await $("input[name='username']").setValue(
      'rahulshettyacademy'
    );
    // input password
    const password = $("//input[@id='password']");
    await password.setValue('learning');
    await $('#signInBtn').click();
    // page loads


    // wait until checkout button is displayed || *= wildcard / recommended to use only on a links
    await $('*=Checkout').waitForExist();
    // logged in

    // grab divs with products - custom locator tagName[class='full classname']
    const cards = await $$(
      "div[class='card h-100']"
    );
    // iterate through the array
    for (
      let i = 0;
      i < (await cards.length);
      i++
    ) {
      // get titles via DOM traversal to reach: div[class='card h-100'] div h4 a - chain locators
      const card = await cards[i].$('div h4 a');
      console.log(await card.getText());
    }
  });
});
