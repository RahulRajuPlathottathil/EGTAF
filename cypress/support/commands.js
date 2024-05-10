// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
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

Cypress.Commands.add(
    'getTextContent',
    { prevSubject: 'element' },
    ($element) => {
        return Cypress.$($element).text()
    }
)

Cypress.Commands.add(
    'selectByValue',
    { prevSubject: 'element' },
    (subject, valueToSelect) => {
        cy.wrap(subject).select(valueToSelect)
    }
)

Cypress.Commands.add(
    'verifyAlertContainsText',
    (type = 'window:alert', element, text, option = true) => {
        const stub = cy.stub()
        cy.on(type, stub)
        element
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWithMatch(text)
            })
            .then(() => option)
    }
)

Cypress.Commands.add('openTab', (element) => {
    element.invoke('removeAttr', 'target')
    cy.window().then((win) => {
        cy.stub(win, 'open').as('openStub')
    })
    element.click()
    cy.get('@openStub').then((openStub) => {
        const url = openStub.args[0][0]
        cy.visit(url)
        cy.wrap(url).as('newUrl')
    })
})

Cypress.Commands.add('switchToFrame', ($element) => {
    $element
        .should('be.visible')
        .should('not.be.empty')
        .then(($iframe) => {
            const $body = $iframe.contents().find('body')

            cy.wrap($body).as('iframe')
        })
})
