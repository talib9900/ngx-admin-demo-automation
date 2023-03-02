import dialog from "./POM/Modals and Overlays/dialog"
import toastr from "./POM/Modals and Overlays/toastr"

describe ("toastr", () => {
    it ("toastr", () => {
        let option = 'top-start'
        let title = 'I am Talib Usmani'
        let content = 'Talib'
        let timeout = '5000'

        cy.visit('/')
        dialog.overlay_module().click()
        toastr.toastr_Module().click()
        toastr.positionToastr().click()
        toastr.findDropdownOption().click().click()
        toastr.enterTitle().clear().type(title)
        toastr.enterContent().clear().type(content)
        toastr.changeMode().contains('Light').click()
        toastr.darkMode().contains('Dark').click()
        toastr.enterTimeout().clear().type(timeout)
        toastr.showToastButton().click()
       
        for(let i=0; i<100 ; i++)
        {
            toastr.showrandomToast().click()
        }
    })
})