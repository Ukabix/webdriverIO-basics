describe('Ecommerce App', async() => {
  
  it('Login fail page', async() => {
    // open browser
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    // await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    // await expect(browser).toHaveTitle('LoginPage Praaaactise | Rahul Shetty Academy');
    // css selector #id .className, !!! tagname[attribute='value'] / input[neame='username'], !!! xpath
    await $("input[name='username']").setValue("rahulshettyacademy");
    await browser.pause(3000);
    await $('#username').setValue("secondCSS");
    await browser.pause(3000);


    
  });
});