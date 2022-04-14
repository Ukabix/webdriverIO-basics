describe('Ecommerce App', async () => {
  it('Login fail page', async () => {
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
    await browser.pause(3000);

  });
});
