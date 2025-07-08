const homePage = require ('../support/pageObjects/homePage/homePage')
const signinPage = require('../support/pageObjects/signinPage/signinPage')
const userData = require('../support/data/userData')

describe('Sign In Feature', () => {
  it('User should be able to sign in with registered user', () => {
    homePage.goToHomePage();
    homePage.clickSignInMenu();
    signinPage.verifiySignInPageAppears();
    signinPage.inputUsernameLogin(userData.valid_username);
    signinPage.inputPasswordLogin(userData.valid_password);
    signinPage.clickSignInButton(); 
  })
  it('User should be able to sign in with not registered user', () => {
    homePage.goToHomePage();
    homePage.clickSignInMenu();
    signinPage.verifiySignInPageAppears();
    signinPage.inputUsernameLogin(userData.invalid_username);
    signinPage.inputPasswordLogin(userData.invalid_password);
    signinPage.clickSignInButton(); 
  })
})