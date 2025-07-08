const homePage = require('../support/pageObjects/homePage/homePage');
const signinPage = require('../support/pageObjects/signinPage/signinPage')
const userData = require('../support/data/userData')
const productPage = require('../support/pageObjects/productPage/productPage')

describe('Checkout Product', () => {
  it('Should login and purchase a phone product', () => {
    homePage.goToHomePage();
    homePage.clickSignInMenu();
    signinPage.verifiySignInPageAppears();
    signinPage.inputUsernameLogin(userData.valid_username);
    signinPage.inputPasswordLogin(userData.valid_password);
    signinPage.clickSignInButton(); 
   

    productPage.ProductHp();
    productPage.addToCart();
    productPage.goToCart();
    productPage.placeOrder();
    productPage.fillOrderForm();
    productPage.purchase();
    cy.contains('Thank you for your purchase!').should('be.visible')
    productPage.goToHomePage();
  })

  it('Should login and purchase a laptop product', () => {
    homePage.goToHomePage();
    homePage.clickSignInMenu();
    signinPage.verifiySignInPageAppears();
    signinPage.inputUsernameLogin(userData.valid_username);
    signinPage.inputPasswordLogin(userData.valid_password);
    signinPage.clickSignInButton(); 
   

    productPage.ProductLaptop();
    productPage.addToCart();
    productPage.goToCart();
    productPage.placeOrder();
    productPage.fillOrderForm();
    productPage.purchase();
    cy.contains('Thank you for your purchase!').should('be.visible')
    productPage.goToHomePage();
  })

  it('Should login and purchase a monitor product', () => {
    homePage.goToHomePage();
    homePage.clickSignInMenu();
    signinPage.verifiySignInPageAppears();
    signinPage.inputUsernameLogin(userData.valid_username);
    signinPage.inputPasswordLogin(userData.valid_password);
    signinPage.clickSignInButton(); 
   

    productPage.ProductMonitor();
    productPage.addToCart();
    productPage.goToCart();
    productPage.placeOrder();
    productPage.fillOrderForm();
    productPage.purchase();
    cy.contains('Thank you for your purchase!').should('be.visible')
    productPage.goToHomePage();
  })
})