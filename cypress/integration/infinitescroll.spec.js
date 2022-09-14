import infinitelist from "./POM/infinitelist"
import layout from "./POM/layout"

describe ( 'Infinite List', () => {
    it ( 'Infinite Scroll', () => {

        cy.visit('/')
        layout.layout_module().click()
        infinitelist.infinite_module().click()
        infinitelist.innerScroll().scrollTo('bottom')
        infinitelist.windowScroll().scrollIntoView()
    })

})