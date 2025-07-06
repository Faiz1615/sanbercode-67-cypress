const locators = require('./signinpage-locators')

class signinPage{
    verifiySignInPageAppears(){
        cy.xpath(locators.label_signin_modal).should('be.visible');
        cy.wait(5000);
        }

    inputUsernameLogin(username){
        cy.get(locators.input_usernamelogin_field).type(username);
        cy.wait(5000);
        }

    inputPasswordLogin(password){
        cy.get(locators.input_passwordlogin_field).type(password);
        cy.wait(5000);
        }
    
    clickSignInButton(){
        cy.xpath(locators.button_signin).click();
    }
    
}

module.exports= new signinPage