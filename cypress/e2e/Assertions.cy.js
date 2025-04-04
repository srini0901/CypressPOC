require('cypress-xpath')

describe("Assertions",()=>{
    it("Assertions test",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Implicit asserttion
        cy.xpath('//input[@name="username"]').should('be.visible').and('be.empty').click().type('Admin')
        cy.xpath('//input[@name="password"]').should('be.visible').click().type('admin123')
        //Explicit assertions
        let expName='admin123'
        let actName=cy.xpath('//input[@name="password"]').invoke('val')
        expect(actName,expName)
       // cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
       cy.get('button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();

    })
})

