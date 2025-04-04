import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.fixture("testdata.json").then((data) => {
      console.log("Inside before hooks")
      Cypress.env("userData", data); // Store it globally
      console.log("Data stored globally in user data")
      console.log("Fixture loaded:", JSON.stringify(data));

    });
  });