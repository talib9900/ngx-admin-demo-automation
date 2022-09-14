/// <reference types = 'cypress'/>


class accordian {

accordian_module()
{
    return cy.get('span').contains('Accordion')
}

click_first_toggle()
{
    return cy.get('[data-test-id ="toggle_button"]')
}
review_dropdown()
{
    return cy.get("[data-test-id ='review_button']")
}
edit_dropdown()
{
    return cy.get('[data-test-id ="edit_button"]')
}
product_button1()
{
    return cy.get('[data-test-id ="product_button1"]')
}
review_button()
{
    return cy.get('[data-test-id ="review_button2"]')
}
edit_button()
{
    return cy.get('[data-test-id ="edit_button2"]')
}




}
export default new accordian()