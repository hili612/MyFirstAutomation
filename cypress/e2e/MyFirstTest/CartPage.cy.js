describe("home page", () => {
    //Data Members

    Cypress.Commands.add('BambaProductNameCart', () => {
        return cy.get('.MuiTypography-body1')
    })

    Cypress.Commands.add('BambaProductImageCart', () => {
        return cy.getByDataID("cart-item-image-0_listitem-0_cart-page")
    })

    Cypress.Commands.add('GetNumberOfProductsCart', () => {
        return cy.get(".MuiBadge-anchorOriginTopRight")
    })
    

    Cypress.Commands.add('BambaProductPriceCart', () => {
        return cy.get('.MuiTypography-body2')
    })

    //Methods
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

    Cypress.Commands.add('ValidateBambaProductName', (productName) => {  
        cy.BambaProductNameCart() 
        .should('exist')
        .invoke('text')
        .should('equal', productName)
    })

    Cypress.Commands.add('ValidateBambaProductPrice', (productPrice) => {
        cy.BambaProductPriceCart()
        .should('exist')
        .invoke('text')
        .should('equal', productPrice)
    })

    Cypress.Commands.add('ValidateBambaProductImage', (productImage) => {
        cy.BambaProductImageCart() 
        .should('exist')
        .invoke('attr', 'src')
        .then((src) => {
            expect(src).to.equal(productImage)
        })
    })

    Cypress.Commands.add('ValidateNumberOfProducts',(numberOfProducts) => {
        cy.GetNumberOfProductsCart() 
        .should('exist')
        .invoke('text')
        .should('equal', numberOfProducts)
    })


//     cy.get('.element-selector')
//   .should('be.visible')
//   .invoke('text')
//   .then((actualText) => {
//     console.log('Actual Text:', actualText);
//     cy.log('Expected Text: במבה');
//     expect(actualText).to.equal('במבה');
//   })
  
})