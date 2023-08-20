// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//<reference types="cypress" />
Cypress.Commands.add("getByDataID", (selector) => {
    return cy.get(`[data-testid=${selector}]`)
})

Cypress.Commands.add('getElementText', (selector) => {
    cy.get(selector)
      .invoke('text')
      .then((text) => {
        cy.log(text)
        return text
      })
})

const getElementTextAndLog = async (elementSelector) => {
    const element = await cy.get(elementSelector);
    const text = await element.invoke('text');
    cy.log(`Element Text: ${text}`);
    return text;
}
  

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })