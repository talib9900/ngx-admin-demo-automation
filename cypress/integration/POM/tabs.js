///<reference types = 'cypress'/>


class tabs {
tabs_module()
{
    return cy.get('span').contains('Tabs')
}

//Added Xpath using SelectorsHub
// to add Xpath you need to run a command 'npm install -D cypress-xpath'
// then add 'require('cypress-xpath');' it in index.js of support file
simpletab2()
{
    return cy.xpath('//span[normalize-space()="Simple Tab #2"]')
}

simpletab1()
{
    return cy.xpath('//span[normalize-space()="Simple Tab #1"]')
}
simpletab3()
{
    return cy.xpath('//span[normalize-space()="Simple Tab #3"]')
}
x10()
{
    return cy.get('[data-test-id ="X10"]')
}
routetab1()
{
    return cy.xpath('//span[normalize-space()="Route tab #1"]')
}
routetab2()
{
    return cy.xpath('//span[normalize-space()="Route tab #2"]')
}

fullwidthtab1()
{
    return cy.xpath('//span[normalize-space()="Full width tab #1"]')
}
fullwidthtab2()
{
    return cy.xpath('//span[normalize-space()="Full width tab #2"]')
}
fullwidthtab3()
{
    return cy.xpath('//span[normalize-space()="Full width tab #3"]')
}
smartHome()
{
    return cy.get('[data-test-id ="smartHome"]')
}
}
export default new tabs ()