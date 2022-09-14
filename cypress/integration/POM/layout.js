/// <reference types="Cypress" />

class layout 
{
    layout_module(){
    return cy.get('span').contains('Layout')
    }

    stepper_module(){
        return cy.get('span').contains('Stepper')
    }

    step1_next(){
        return cy.get('[data-test-id="Step1next"]')
    }

    step2_next(){
        return cy.get('[data-test-id="Step2next"]')
    }

    step3_next(){
        return cy.get('[data-test-id="Step3next"]')
    }

    step1_prev(){
        return cy.get('[data-test-id="Step1prev"]')
    }

    step2_prev(){
        return cy.get('[data-test-id="Step2prev"]')
    }

    step3_prev(){
        return cy.get('[data-test-id="Step3prev"]')
    }

    enter_name(){
        return cy.get('[data-test-id="enter-name"]')
    }

    form2next1(){
        return cy.get('[data-test-id="form2next1"]')
    }

    enter_movie(){
        return cy.get('[data-test-id="enter-movie"]')
    }

    form2next2(){
        return cy.get('[data-test-id="form2next2"]')
    }

    enter_something(){
        return cy.get('[data-test-id="enter-something"]')
    }

    confirm(){
        return cy.get('[data-test-id="confirm"]')
    }

    form3next1(){
        return cy.get('[data-test-id="form3next1"]')
    }

    form3next2(){
        return cy.get('[data-test-id="form3next2"]')
    }

    form3next3(){
        return cy.get('[data-test-id="form3next3"]')
    }







}

export default new layout();