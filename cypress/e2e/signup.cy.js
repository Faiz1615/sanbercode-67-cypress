const homePage = require('../support/pageObjects/homePage/homePage');
const signupPage = require('../support/pageObjects/signupPage/signupPage'); 
const userData = require('../support/data/userData');
const { beforeEach } = require('mocha');

describe('Sign Up Feature', () => {
  beforeEach(() =>{
    homePage.goToHomePage();
  })

  afterEach(() =>{
    signupPage.clickSignUpButton();
  })
  it('User should be able to sign up with valid data', () => {
   homePage.clickSignUpMenu();
   signupPage.verifiySignUpPageAppears();
   signupPage.inputUsername(userData.valid_username);
   signupPage.inputPassword(userData.valid_password);
   
  })
  
  it('User should be able to sign up with registered user', () => {
   homePage.clickSignUpMenu();
   signupPage.verifiySignUpPageAppears();
   signupPage.inputUsername(userData.invalid_username);
   signupPage.inputPassword(userData.invalid_password);
   
  })
})