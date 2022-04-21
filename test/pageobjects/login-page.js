class LoginPage {

  // locators
  
  // gets bind to object.property
  get inputUsername() {
    console.log("Getting " + "username" + "locator");
    return $("input[name='username']");
  };

  get inputPassword() {
    console.log("Getting " + "password" + "locator");
    return $("//input[@id='password']");
  }

  get alert() {
    return $('.alert-danger');
  };

  get btnSignIn() {
    return $('#signInBtn');
  };

  get paragraphTextInfo() {
    return $("p")
  };

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSignIn.click();
  }

};

module.exports = new LoginPage;