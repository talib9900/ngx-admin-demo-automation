/// <reference types = 'cypress'/>

class infiniteScroll
{
    infinite_module ()
    {
        return cy.get('span').contains('Infinite List')
    }

    innerScroll ()
    {
        return cy.get('[data-test-id ="innerScroll"]')
    }

    windowScroll ()
    {
        return cy.get('[data-test-id ="windowScroll"]')
    }


}
export default new infiniteScroll ()