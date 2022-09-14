import layout from "./POM/layout"
import list from "./POM/list"

describe ( 'list', () => {
    it ( 'condition on user list', () => {

        cy.visit('/')
        layout.layout_module().click()
        list.list_module().click()
        cy.get('.ng-star-inserted')
        .find('[data-test-id ="userlist"]')
        .then(listing => {
            const listingCount = Cypress.$(listing).length;
            expect(listing).to.have.length(listingCount);
            cy.log(listingCount)

            for (var i = 1; i < 2; i++) {
                cy.get('[data-test-id ="userlist"]')
                .should("be.visible")
                .then($signer => {
                  const userText = $signer.text()
                  cy.log(userText)
                  //for (var i = 1; i < fruitText; i++)
                  if($signer.text().includes('Bob'))
                  {
                    cy.log('found')
                    // cy.log($signer.text())
                  }
                })
    
                //cy.get('.ng-star-inserted').contains('Kiwis')
    
            }
    
            })
    
        })
    })