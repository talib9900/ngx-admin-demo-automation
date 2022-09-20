/// <reference types = 'cypress'/>


class date {

date_module()
{
    return cy.get('span').contains('Datepicker')
}
commonDate()
{
    return cy.get('[data-test-id ="CommonDate"]')
}
CommonDatePicker()
{
    return cy.get('.cdk-overlay-pane')
}






}
export default new date ()
