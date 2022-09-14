/// <reference types = "cypress"/> 


class formInput {

    form_module()
    {
        return cy.get('span').contains('Forms')
    }

    form_input()
    {
        return cy.get('span').contains('Form Inputs')
    }

    projectName()
    {
        return cy.get('[data-test-id = "Project"]')
    }

    nick()
    {
        return cy.get('[data-test-id = "Nick"]')
    }

    lastName()
    {
        return cy.get('[data-test-id = "Last Name"]')
    }

    password()
    {
        return cy.get('[data-test-id = "Password"]')
    }
    
    rectangle()
    {
        return cy.get('[data-test-id = "rectangleBorder"]')
    }

    semiRound()
    {
        return cy.get('[data-test-id = "semiRound"]')
    }

    rounded()
    {
        return cy.get('[data-test-id = "rounded"]')
    }

    textArea()
    {
        return cy.get('[data-test-id = "textArea"]')
    }

    smallInput()
    {
        return cy.get('[data-test-id = "smallText"]')
    }

    mediumInput()
    {
        return cy.get('[data-test-id = "mediumText"]')
    }

    largeInput()
    {
        return cy.get('[data-test-id = "largeText"]')
    }

    option1()
    {
        return cy.xpath('//button[normalize-space()="Option 1"]')
    }

    option2()
    {
        return cy.get('[data-test-id = "option2"]')
    }

    infoInput()
    {
        return cy.get('[data-test-id = "infoInput"]')
    }

    warningInput()
    {
        return cy.get('[data-test-id = "warningInput"]')
    }

    dangerInput1()
    {
        return cy.get('[data-test-id = "dangerInput1"]')
    }

    dangerInput2()
    {
        return cy.get('[data-test-id = "dangerInput2"]')
    }

    primaryInput()
    {
        return cy.get('[data-test-id = "primaryInput"]')
    }

    successCheckbox()
    {
        return cy.xpath('//nb-checkbox[@data-test-id="successCheckbox"]//span[1]')
    }

    warningCheckbox()
    {
        return cy.get('[data-test-id = "warningCheckbox"]')
    }

    dangerCheckbox()
    {
        return cy.get('[data-test-id = "dangerCheckbox"]')
    }

    checkBox1()
    {
        return cy.get('[data-test-id="Checkbox1"]')
    }

    checkBox2()
    {
        return cy.get('[data-test-id="Checkbox2"]')
    }

    radio3()
    {
        return cy.get('[data-test-id="Radio3"]')
    }
    










}
export default new formInput ()
