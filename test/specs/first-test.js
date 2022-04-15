describe('Ecommerce App', async () => {
  // xit disables test
  xit('Login fail page', async () => {
    // open browser
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    // await expect(browser).toHaveTitle('LoginPage Praaaactise | Rahul Shetty Academy');
    // css selector #id .className, !!! tagname[attribute='value'] / input[neame='username'], !!! xpath
    await $("input[name='username']").setValue(
      'rahulshettyacademy'
    );
    // await browser.pause(3000);
    await $('#username').setValue('secondCSS');
    // await browser.pause(3000);
    // XPath : //tagname[@attribute='value']
    // await $("//input[@id='password']").setValue('password');
    const password = $("//input[@id='password']");
    await password.setValue('learningsad');
    await $('#signInBtn').click();
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
