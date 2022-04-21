const expectChai = require("chai").expect;
const loginPage = require("../pageobjects/login-page");
const shopPage = require("../pageobjects/shop-page");

describe("Ecommerce app", async () => {
  it("End to end test", async () => {
    //// login
    // open page
    await browser.url(
      "https://www.rahulshettyacademy.com/loginpagePractise/"
    );
    // max window
    await browser.maximizeWindow();
    // assert page is open
    await expect(browser).toHaveTitleContaining(
      "Rahul"
    );
    // execute sign in
    await loginPage.login(
      "rahulshettyacademy",
      "learning"
    );

    // page loads - now on shop page
    // assert page has loaded - TODO

    // declare test products
    const products = ["iphone X", "Blackberry"];

    // wait until checkout button is displayed
    await shopPage.btnCheckout.waitForExist({
      timeout: 180000,
      reverse: false,
      timeoutMsg: "",
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
    // get element prices
    const productPrices = await $$(
      'tr td:nth-child(4) strong'
    ); // array
    // filter to get only numbers as sum
    const productPricesSum = (
      await Promise.all(
        await productPrices.map(
          async (productPrice) =>
            parseInt(
              (await productPrice.getText())
                .split('.')[1]
                .trim()
            )
        )
      )
    ).reduce((acc, price) => acc + price, 0);
    // returns trimmed int array || arrayEach: [("$. 10000" -> ["$.", " 10000" -> " 10000" -> "10000" -> 10000), 5000] || reduce: 0+=10000 -> 10000+=5000 -> 15000
    // console.log(productPricesSum);
    // get cart sum
    // get element
    const cartSumText = await $(
      'h3 strong'
    ).getText();
    // handle text to get int
    const cartSum = await parseInt(
      cartSumText.split('.')[1].trim()
    );
    // check if cart sum === productPricesSum
    await expectChai(cartSum).to.eql(
      productPricesSum
    );

    // move on to next step - press checkout btn
    await $('.btn-success').click(); // land on new page
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
