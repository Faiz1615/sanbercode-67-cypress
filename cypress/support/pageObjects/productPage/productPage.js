const locators = require ('./productpage-locators')
const userData = require ('../../data/userData')

class productPage {
  ProductHp() {
    cy.wait(3000)
    cy.contains(locators.producthp).click()
  }
  ProductLaptop() {
    cy.wait(3000)
    cy.contains(locators.productlaptop).click()
  }
  ProductMonitor() {
    cy.wait(3000)
    cy.get(locators.nextpage).click()
    cy.contains(locators.productmonitor).click()
  }

  addToCart() {
    cy.wait(1000)
    cy.contains(locators.cart).click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added')
    })
  }

  goToCart() {
    cy.get(locators.gotocart).click()
  }

  placeOrder() {
    cy.contains(locators.place_order).click()
  }

  fillOrderForm() {
    cy.wait(3000)
    cy.get(locators.name).type(userData.name)
    cy.wait(3000)
    cy.get(locators.country).type(userData.country)
    cy.wait(3000)
    cy.get(locators.city).type(userData.city)
    cy.wait(3000)
    cy.get(locators.card).type(userData.card)
    cy.wait(3000)
    cy.get(locators.month).type(userData.month)
    cy.wait(3000)
    cy.get(locators.year).type(userData.year)
  }

  purchase() {
    cy.contains(locators.purchase).click()
  }

  goToHomePage(){
    cy.get(locators.confirm).click()
  }
}

module.exports = new productPage