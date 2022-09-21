///<reference types = 'cypress'/>


class buttons{
button_module()
{
    return cy.get('span').contains('Buttons')
}

heroPrimary()
{
    return cy.get('.buttons-row').contains('primary')
}

heroSuccess()
{
    return cy.get('.buttons-row').contains('success')
}

outlinePrimary()
{
    return cy.get('.buttons-row').find('.appearance-outline size-medium shape-rectangle status-primary')
}






}
export default new buttons()