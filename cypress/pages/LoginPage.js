const LoginLocators = {
    usernameField: 'input[name="username"]',
    passwordField: 'input[name="password"]',
    loginButton: 'button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]',
    
    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.wait(2000);
        cy.screenshot("Page visited");
        
    },
    
      enterUsername(username) {
        cy.get(this.usernameField).click().type(username);
      },
    
      enterPassword(password) {
        cy.get(this.passwordField).should('be.visible').click().type(password);
      },
    
      clickLogin() {
        cy.get(this.loginButton).click();
      },
    
      verifyLoginSuccess() {
        cy.get(this.welcomeMessage).should("be.visible");
      }


};
  
  export default LoginLocators;

