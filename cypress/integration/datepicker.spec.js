import date from "./POM/Forms/date"
import forminput from "./POM/Forms/forminput"
import layout from "./POM/layout"

describe ('date', () => {
    it ('Common DatePicker', () => {
        cy.visit('/')
        layout.layout_module().click()
        forminput.form_module().click()
        date.date_module().click()
        date.commonDate().click()

        let Text = cy.get('[class="appearance-ghost size-medium shape-rectangle icon-end status-basic nb-transition"]').invoke('text').then(text1 =>{
            let innerText=text1
        })
        let desiredDate = "August 2018"

        while( Text = desiredDate ){

            cy.get('[class="prev-month appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition"]').click()
        }
        
    })
            
})
        
        