class ShopPage {

  // locators
  
  // gets bind to object.property
  get btnCheckout() {
    return $(
      '.nav-link.btn.btn-primary'
    );
  };

  get elementsCards() {
    return $$(
      "div[class='card h-100']"
    );
  };

  async addProductsToCart(products) {
    // iterate elementsCards array and for each matching products -> add to cart
    for (
      let i = 0;
      i < (await this.elementsCards.length);
      i++
    ) {
      // get titles via DOM traversal to reach: div[class='card h-100'] div h4 a - chain locators
      const card = await this.elementsCards[i].$('div h4 a');
      // filter products via if statement, if true -> click that card
      if (
        products.includes(await card.getText())
      ) {
        //// click that card
        // get locator for add btn
        const btn = await this.elementsCards[i].$(
          '.card-footer button'
        );
        await btn.click();
      };
    };
  };

};

module.exports = new ShopPage;