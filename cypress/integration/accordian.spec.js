import accordian from "./POM/accordian"
import layout from "./POM/layout"

describe ( 'Accordian', () => {
    it ('Click on Toggle', () => {

        cy.visit('/')
        layout.layout_module().click()
        accordian.accordian_module().click()
        accordian.click_first_toggle().click()
        accordian.review_dropdown().click()
        accordian.edit_dropdown().click()
        accordian.product_button1().click()
        accordian.review_button().click()
        accordian.edit_button().click()


    })
})