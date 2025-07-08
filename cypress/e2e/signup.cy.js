const homePage = require('../support/pageObjects/homePage/homePage');
const signupPage = require('../support/pageObjects/signupPage/signupPage'); 
const userData = require('../support/data/userData')
const {faker} = require('@faker-js/faker')

describe('Sign Up Feature', () => { 
  it('User should be able to sign up with valid data', () => {
    const randomUsernameandPassword = faker.person.firstName() + '123';
   homePage.goToHomePage();
   homePage.clickSignUpMenu();
   signupPage.verifiySignUpPageAppears();
   signupPage.inputUsername(randomUsernameandPassword);
   signupPage.inputPassword(randomUsernameandPassword);
   signupPage.clickSignUpButton();
  })
  it('User should be able to sign up with registered user', () => {
   homePage.goToHomePage();
   homePage.clickSignUpMenu();
   signupPage.verifiySignUpPageAppears();
   signupPage.inputUsername(userData.invalid_username);
   signupPage.inputPassword(userData.invalid_password);
   signupPage.clickSignUpButton();
  })
})