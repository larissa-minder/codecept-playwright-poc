const { I } = inject();

class loginPage {

  readonly username;
  readonly password;
  readonly login_button;

  constructor() {
    
     this.username = '[data-test="username"]';
     this.password = '[data-test="password"]';
     this.login_button = '[data-test="login-button"]';
  }

  doLogin(username, password) {
    I.amOnPage('/')
    I.fillField( this.username, username);
    I.fillField(this.password, password);
    I.click('this.login_button');
  } 
}

// For inheritance
module.exports = new loginPage();
export = loginPage;
