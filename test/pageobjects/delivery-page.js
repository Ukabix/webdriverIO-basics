class DeliveryPage {
  // locators

  // gets bind to object.property
  get inputCountry() {
    return $('#country'); // array
  }

  get animElipsis() {
    return $('.lds-ellipsis');
  }

  get anchorListItem() {
    return $('=Poland');
  }

  get btnSubmit() {
    return $('input[type=submit]');
  }

  get alertSubmitSuccess() {
    return $('.alert-success');
  }

  async queryPol() {
    return this.inputCountry.setValue('pol');
  }
}

module.exports = new DeliveryPage();
