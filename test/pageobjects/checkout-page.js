class CheckoutPage {
  // locators

  // gets bind to object.property
  get productPrices() {
    return $$('tr td:nth-child(4) strong'); // array
  }

  get cartTotal() {
    return $('h3 strong');
  }

  get btnForward() {
    return $('.btn-success');
  }

  async productPricesTotal() {
    // returns trimmed int array || arrayEach: [("$. 10000" -> ["$.", " 10000" -> " 10000" -> "10000" -> 10000), 5000] || reduce: 0+=10000 -> 10000+=5000 -> 15000
    // console.log(productPricesSum);
    return (
      await Promise.all(
        await this.productPrices.map(
          async (productPrice) =>
            parseInt(
              (await productPrice.getText())
                .split('.')[1]
                .trim()
            )
        )
      )
    ).reduce((acc, price) => acc + price, 0);
  }

  async cartPriceTotal() {
    // handle text to get int
    const cartTotalText =
      await this.cartTotal.getText();
    return await parseInt(
      cartTotalText.split('.')[1].trim()
    );
  }
}

module.exports = new CheckoutPage();
