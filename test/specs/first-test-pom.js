const loginPage = require ("../pageobjects/login-page");

describe("Ecommerce App", async () => {
  // xit disables test
  xit("Login page - fail to sign in with invalid credentials", async () => {
    // open browser
    await browser.url(
      "https://www.rahulshettyacademy.com/loginpagePractise/"
    );
    // assert page is open
    await expect(browser).toHaveTitleContaining("Rahul");
    // execute sign in
    loginPage.login("rahulshettyacademy", "wrongpass");
    


    await browser.waitUntil(
      async () =>
        (await $('#signInBtn').getAttribute(
          'value'
        )) === 'Sign In',
      {
        timeout: 5000,
        timeoutMsg: 'Error msg is not showing up',
      }
    );
    await console.log(
      await $('.alert-danger').getText()
    );
    await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning");
  });
  it('Login success page title', async ()=> {
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
    await $('#signInBtn').click();
    // page loads
    // wait until checkout button is displayed
    // dom traversal
    await $(".btn-primary").waitForExist();
    await expect(browser).toHaveUrlContaining('shop');
    await expect(browser).toHaveTitle('ProtoCommerce');

  });
});
