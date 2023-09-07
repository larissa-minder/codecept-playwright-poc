// in this file you can append custom step methods to 'I' object

export = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    getByHelper: function (pokemon: string) {

      this.sendGetRequest(`/${pokemon}`);
      this.seeResponseCodeIsSuccessful();
    },

    doLogin: function (username: string, password: string) {

      this.amOnPage('/')
      this.fillField('[data-test="username"]', username);
      this.fillField('[data-test="password"]', password);
      this.click('[data-test="login-button"]');
    }

  });
}
