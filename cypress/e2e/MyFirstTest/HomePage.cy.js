describe("home page", () => {
    //Data Members
    Cypress.Commands.add('AddBambaProductButton', () => {
        return cy.getByDataID("add-cart-button_product-card-0_home-page")
    })

    Cypress.Commands.add('CartButton', () => {
        return cy.get('[id*=mui-p-]').eq(1)
    })

    Cypress.Commands.add('BambaProductName', () => {
        return cy.getByDataID("product-name_product-card-0_home-page")
    })

    Cypress.Commands.add('BambaProductImage', () => {
        return cy.getByDataID("product-image_product-card-0_home-page")
    })

    Cypress.Commands.add('BambaProductPrice', () => {
        return cy.getByDataID("product-price_product-card-0_home-page")
    })

    //Methods
    Cypress.Commands.add('GoToHomePage', () => {
        cy.visit("localhost:5173")
    })

    Cypress.Commands.add('GoToCartPage', () => {
        cy.CartButton()
        .should('be.visible')
        .click()
    })

    Cypress.Commands.add('AddBambaProduct', () => {
        cy.AddBambaProductButton()
        .should('be.visible')
        .click()
    })

    Cypress.Commands.add('GetBambaProductName', () => {
    cy.BambaProductName()
    .should('exist')
    .invoke('text')
    .then((text) => {
        cy.log(text) 
        return (text)
    })
    })

    Cypress.Commands.add('GetBambaProductPrice', () => {
        cy.BambaProductPrice()
        .should('exist')
        .invoke('text')
        .then((text) => {
            cy.log(text)
            return (text)
        })
    })

    Cypress.Commands.add('GetBambaProductImage', () => {
        cy.BambaProductImage()
        .should('exist')
        .should('have.attr', 'src')
        // .invoke('attr', 'src')
        .then((src) => {
          cy.log(`Image Source: ${src}`)  
          return (text)
        })
    })
})