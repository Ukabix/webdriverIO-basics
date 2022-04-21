const expectChai = require('chai').expect;

describe('Ecommerce app', async () => {
  it('End to end test', async () => {
    // select products
    const products = ['iphone X', 'Blackberry'];
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
    const checkout = await $(
      '.nav-link.btn.btn-primary'
    );
    await checkout.waitForExist({
      timeout: 180000,
      reverse: false,
      timeoutMsg: '',
      interval: 5000,
    });
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
      // choose products via if statement
      if (
        products.includes(await card.getText())
      ) {
        //// click that card
        // get locator for add btn
        const btn = await cards[i].$(
          '.card-footer button'
        );
        await btn.click();
      }
    }
    // click checkout
    await checkout.click();

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
    const cartSumText = await $("h3 strong").getText();
    // handle text to get int
    const cartSum = await parseInt(cartSumText.split('.')[1].trim());
    // check if cart sum === productPricesSum
    await expectChai(cartSum).not.to.eql(productPricesSum);

    await browser.pause(3000);
  });
});
