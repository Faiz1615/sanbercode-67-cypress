const locators = require ('./homepage-locators')

class homePage{
    goToHomePage(){
        cy.visit('https://demoblaze.com/index.html')
    }

    clikSignUpMenu(){
        cy.get(locators.menu_signup).click();
    }

    clickSignInMenu(){
        cy.get(locators.menu_signin).click();
    }
}

module.exports = new homePage();