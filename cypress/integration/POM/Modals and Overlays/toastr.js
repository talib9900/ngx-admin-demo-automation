///<reference types = 'cypress'/>

class toastr {
    toastr_Module()
    {
       return cy.get('span').contains('Toastr')
    }

    positionToastr()
    {
        return cy.get('[data-test-id="position"]')
    }

    findDropdownOption()
    {
        return cy.get('[data-test-id="dropdown options"]')
    }

    enterTitle()
    {
        return cy.get('[data-test-id="title"]')
    }

    enterContent()
    {
        return cy.get('[data-test-id="content"]')
    }

    enterTimeout()
    {
        return cy.get('[data-test-id="timeout"]')
    }

    showToastButton()
    {
        return cy.get('[data-test-id="Show Toast"]')
    }

    showrandomToast()
    {
        return cy.get('[data-test-id="Random Toast"]')
    }

    changeMode()
    {
        return cy.get('.select-button')
    }

    darkMode()
    {
        return cy.get('.option-list')
    }
}
export default new toastr ()