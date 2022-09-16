import forminput from "./POM/Forms/forminput"
import formlayout from "./POM/Forms/formlayout"
import layout from "./POM/layout"

describe ( 'form layout', () => {
    it ('inline form', () => {

        cy.visit('/')
        layout.layout_module().click()
        forminput.form_module().click()
        formlayout.formlayout().click()
        formlayout.inlineName().type('Talib Usmani')
        formlayout.inlineEmail().type('talibusmani0@gmail.com')
        formlayout.inlineCheckbox().find('.custom-checkbox').click()
        formlayout.inlineSubmit().click()
    })

    it('Using the Grid', () => {
        formlayout.gridEmail().type('talibusmani46@gmail.com')
        formlayout.gridPassword().type('talibusmani')
        formlayout.gridOption1().find('.inner-circle').click()
        formlayout.gridSignIn().click()
    })

    it('Form without label', () => {
        formlayout.labelRecipient().type('Talib Usmani')
        formlayout.labelSubject().type('Wedding Invitation')
        formlayout.labelMessage().type('We are inviting you to the wedding ceremony of your ex')
        formlayout.labelSend().click()
    })

    it('Basic Form', () => {
        formlayout.basicEmail().type('talib.usmani@gmail.com')
        formlayout.basicPassword().type('Password1234')
        formlayout.basicCheckbox().find('.custom-checkbox').click()
        formlayout.basicSubmit().click()
    })

    it('Block Form', () => {
        formlayout.blockFirstName().type('Talib')
        formlayout.blockLastName().type('Usmani')
        formlayout.blockEmail().type('talibusmani@gmail.com')
        formlayout.blockWeb().type('www.youtube.com')
        formlayout.blockSubmit().click()
    })

    it('Horizontal Form', () => {
        formlayout.horizontalEmail().type('talib@gmail.com')
        formlayout.horizontalPassword().type('talibusmani')
        formlayout.horizontalRemember().find('.custom-checkbox').click()
        formlayout.horizontalSubmit().click()
    })
})