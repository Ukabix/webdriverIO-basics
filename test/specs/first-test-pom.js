const loginPage = require ("../pageobjects/login-page");

describe("Ecommerce App", async function () {

  // xit disables test
  it("Login page - fail to sign in with invalid credentials -Smoke", async () => {
    this.retries(2);
    // open browser
    await browser.url(
      "https://www.rahulshettyacademy.com/loginpagePractise/"
    );
    // assert page is open
    await expect(browser).toHaveTitleContaining("Rahul");
    // execute sign in
    await loginPage.login("rahulshettyacademy", "wrongpass");
    // check alert
    await console.log(
      await loginPage.alert.getText()
    );
    // wait for site render
    await browser.waitUntil(
      async () =>
        (await loginPage.btnSignIn.getAttribute(
          'value'
        )) === 'Sign In',
      {
        timeout: 5000,
        timeoutMsg: 'Error msg is not showing up',
      }
    );
    // check alert presence
    await console.log(
      await loginPage.alert.getText()
    );
    // assert that browser is still on login page
    await expect(await loginPage.paragraphTextInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning");
  });
  xit('Login success page title', async ()=> {
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
