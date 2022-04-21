// import libraries
const expectChai = require('chai').expect;
// import POMs
const loginPage = require('../pageobjects/login-page');
const shopPage = require('../pageobjects/shop-page');
const checkoutPage = require('../pageobjects/checkout-page');

describe('Ecommerce app', async () => {
  it('End to end test', async () => {
    //// login
    // open page
    await browser.url(
      'https://www.rahulshettyacademy.com/loginpagePractise/'
    );
    // max window
    await browser.maximizeWindow();
    // assert page is open
    await expect(browser).toHaveTitleContaining(
      'Rahul'
    );
    // execute sign in
    await loginPage.login(
      'rahulshettyacademy',
      'learning'
    );

    // page loads - now on shop page
    // assert page has loaded - TODO

    // declare test products
    const products = ['iphone X', 'Blackberry'];

    // wait until checkout button is displayed
    await shopPage.btnCheckout.waitForExist({
      timeout: 180000,
      reverse: false,
      timeoutMsg: '',
      interval: 5000,
    });

    // should be logged in
    // assert logged in - TODO

    // call addProductsToCart, pass products
    await shopPage.addProductsToCart(products);

    // click checkout
    await shopPage.btnCheckout.click();

    // page loads - now on checkout page
    // assert page has loaded - TODO

    //// validate sum of cart
    // get selected products total
    const productPricesTotal =
      await checkoutPage.productPricesTotal();
    // get checkout total
    const cartPriceTotal =
      await checkoutPage.cartPriceTotal();

    // check if cart sum === productPricesSum
    await expectChai(productPricesTotal).to.eql(
      cartPriceTotal
    );

    // move on to next step - press checkout btn
    await checkoutPage.btnForward.click();

    //// land on new page
    // get element
    await $('#country').setValue('pol');
    // wait for loader animation to dissapear || exist negation
    await $('.lds-ellipsis').waitForExist({
      reverse: true,
    });
    // get a element
    await $('=Poland').click();
    // press purchase btn
    await $('input[type=submit]').click();
    // get sucess alert
    await expect(
      $('.alert-success')
    ).toHaveTextContaining('Success');

    await browser.pause(3000);
  });
});
