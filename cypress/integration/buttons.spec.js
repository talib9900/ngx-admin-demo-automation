import buttons from "./POM/Forms/buttons"
import forminput from "./POM/Forms/forminput"
import layout from "./POM/layout"

describe('Button', () => {

    it('Hero buttons', () => {

        cy.visit('/')
        layout.layout_module().click()
        forminput.form_module().click()
        buttons.button_module().click()
        // to add real Hoverplugin 
        // Run npm install cypress-real-events
        // then add the plugin in support/index.js
        // write require ('cypress-real-events')
        buttons.heroPrimary().realHover()
        buttons.heroSuccess().realHover()
        buttons.outlinePrimary().realHover()

    })








})