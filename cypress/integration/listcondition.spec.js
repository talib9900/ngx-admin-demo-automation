import list from "./POM/list"
import layout from "./POM/layout"

describe ('list', () => {




    it('condition on fruit list', () => {
        cy.visit('/')
        layout.layout_module().click({force: true})
        list.list_module().click()
        cy.get('.ng-star-inserted')
        .find('[data-test-id ="fruitlist"]')
        .then(listing => {
            const listingCount = Cypress.$(listing).length;
            expect(listing).to.have.length(listingCount);
            cy.log(listingCount)

            
        for (var i = 1; i < listingCount; i++) {
            cy.get('[data-test-id ="fruitlist"]')
            .should("be.visible")
            .then($signer => {
              const fruitText = $signer.text()
              cy.log(fruitText)
              //for (var i = 1; i < fruitText; i++)
              if($signer.text().includes('Kiwis'))
              {
                cy.log('found')
                cy.log($signer.text())
              }
            })

            //cy.get('.ng-star-inserted').contains('Kiwis')

        }

        })

    })
})