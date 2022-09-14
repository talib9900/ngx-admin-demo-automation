import layout from "./POM/layout"

describe('love you', () => {

    it('talib mere dil me', () => {
        cy.visit("/")
        layout.layout_module().click({force: true})
        layout.stepper_module().click()
        layout.step1_next().click()
        layout.step2_next().click()
        layout.step3_next().click()
        layout.step1_prev().click()
        layout.step2_prev().click()
        layout.step3_prev().click()
        layout.enter_name().type('Talib Usmani')
        layout.form2next1().click()
        layout.enter_movie().type('50 Shades of Grey')
        layout.form2next2().click()
        layout.enter_something().type('Hello Friend')
        layout.confirm().click()
        layout.form3next1().click()
        layout.form3next2().click() 
        layout.form3next3().scrollIntoView().click()

    })
})

