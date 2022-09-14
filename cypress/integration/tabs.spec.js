import layout from "./POM/layout"
import tabs from "./POM/tabs"

describe( 'tabs', () => {
    it( 'tabsclicks', () => {

        cy.visit('/')
        layout.layout_module().click()
        tabs.tabs_module().click()
        tabs.simpletab2().click()
        tabs.simpletab1().click()
        tabs.simpletab3().click()
        //tabs.x10().click()
        tabs.routetab2().click()
        tabs.routetab1().click()
        tabs.fullwidthtab3().click()
        tabs.fullwidthtab2().click()
        tabs.fullwidthtab1().click()
        tabs.smartHome().click()




    })


})