/// <reference types = "cypress"/>

class formlayout 
{
formlayout()
{
    return cy.get('span').contains('Form Layouts')
}

inlineName()
{
    return cy.get('[data-test-id = "inline form name"]')
}

inlineEmail()
{
    return cy.get('[data-test-id = "inline form email"]')
}

inlineCheckbox()
{
    return cy.get('[data-test-id = "inline form checkbox"]')
}
inlineSubmit()
{
    return cy.get('[data-test-id = "inline submit"]')
}

gridEmail()
{
    return cy.get('[data-test-id = "Grid Email"]')
}

gridPassword()
{
    return cy.get('[data-test-id = "Grid Password"]')
}

gridOption1()
{
    return cy.get('[data-test-id = "Option1"]')
}

gridSignIn()
{
    return cy.get('[data-test-id = "SignIn"]')
}

labelRecipient()
{
    return cy.get('[data-test-id = "Recipients"]')
}

labelSubject()
{
    return cy.get('[data-test-id = "Subject"]')
}

labelMessage()
{
    return cy.get('[data-test-id = "Message"]')
}

labelSend()
{
    return cy.get('[data-test-id = "Send"]')
}

basicEmail()
{
    return cy.get('[data-test-id = "basic Email"]')
}

basicPassword()
{
    return cy.get('[data-test-id = "basic Password"]')
}

basicCheckbox()
{
    return cy.get('[data-test-id = "Check me out"]')
}

basicSubmit()
{
    return cy.get ('[data-test-id = "basicSubmit"]')
}

blockFirstName()
{
    return cy.get ('[data-test-id = "block first name"]')
}

blockLastName()
{
    return cy.get ('[data-test-id = "block last name"]')
}

blockEmail()
{
    return cy.get ('[data-test-id = "block email"]')
}

blockWeb()
{
    return cy.get('[data-test-id = "Website"]')
}

blockSubmit()
{
    return cy.get('[data-test-id = "block submit"]')
}

horizontalEmail()
{
    return cy.get('[data-test-id = "horizontalEmail"]')
}

horizontalPassword()
{
    return cy.get('[data-test-id = "horizontalPassword"]')
}
horizontalRemember()
{
    return cy.get('[data-test-id = "RememberMe"]')
}

horizontalSubmit()
{
    return cy.get('[data-test-id = "Horizontalsubmit"]')
}



}

export default new formlayout ()