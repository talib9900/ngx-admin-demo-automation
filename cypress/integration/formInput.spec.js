import forminput from "./POM/Forms/forminput"
import layout from "./POM/layout"

describe( 'formInput', () => {
    it( 'fill the form', () => {

        cy.visit('/')
        layout.layout_module().click()
        forminput.form_module().click()
        forminput.form_input().click()
        forminput.projectName().type('Recurate')
        forminput.nick().type('Buddy')
        forminput.lastName().type('Hassan')
        forminput.password().type('talibusmani')
        forminput.rectangle().type('1900*1080')
        forminput.semiRound().type('1000*1000')
        forminput.rounded().type('1080*2000')
        forminput.textArea().type('Dear All,Claims has been transferred in to your respective bank accounts. If the status of claims are paid then please check your bank statement of SCB and who did not provide their SCB accounts to accounts dept then plz check your bank statement of BAHL for confirmation.In case of any query plz contact')
        forminput.smallInput().type('HI')
        forminput.mediumInput().type('Hello')
        forminput.largeInput().type('Hello Taha')
        forminput.option1().click()
        forminput.option2().click()
        forminput.infoInput().type('Hi I am Info Input')
        forminput.warningInput().type('Hi I am Warning Input')
        forminput.dangerInput1().type('Hi I am Danger Input 1')
        forminput.dangerInput2().type('Hi I am Danger Input 2')
        forminput.primaryInput().type('Hi I am Primary Input')
        forminput.successCheckbox().click()
        forminput.warningCheckbox().find('.custom-checkbox').click()
        forminput.dangerCheckbox().find('.custom-checkbox').click()
        forminput.checkBox1().find('.custom-checkbox').click()
        forminput.checkBox2().find('.custom-checkbox').click()
        //forminput.radio3().find('.inner-circle').click()

    })
})