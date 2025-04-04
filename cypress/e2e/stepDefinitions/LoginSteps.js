import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";
Given("the user is on Orange HRM page", () => {
 LoginPage.visit()
});

When("User enters username", () => {
  console.log("fetching data from udata")
   const udata=Cypress.env("userData");
console.log("Inside stepdefinitions:Trying to read data from udata..")
    LoginPage.enterUsername(udata.username)

});

When("User enters password", () => {
  LoginPage.enterPassword(Cypress.env("userData").password)

});

When("User clicks on login button", () => {
  LoginPage.clickLogin()
  
});

Then("Verify user is able to login to the portal", () => {
  cy.url().should("include", "/dashboard"); // Validate successful login
  cy.wait(2000)
});
