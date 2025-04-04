# CypressPOC
Cypress BDD Test Automation Framework
--------------------------------------
This is a sample Cypress Test Automation Framework using **BDD (Cucumber)** with the following key features:

Features Implemented
--------------------------------------
BDD with **Cucumber (Gherkin)**  
Step Definitions with reusable logic  
Page Object Model for scalable test design  
Data-Driven Testing using external **JSON fixtures**  
Test Retries & Flaky Test Handling  
**Mochawesome Reports** with merged HTML output  
**Screenshots and Videos** on test failure  
Rerun mechanism for failed tests  
Organized project structure for maintainability  

Retry Strategy
--------------------------------------
Tests are retried up to 2 times if they fail (configured via cypress.config.js).

Prerequisites
--------------------------------------
Before setting up the project ensure you have:

1. [Node.js](https://nodejs.org/) installed  
2. [Visual Studio Code](https://code.visualstudio.com/) or your preferred editor  
3. Git (optional but recommended for version control)

Installation and set up
--------------------------------------
1.Create a new folder and navigate to it.
mkdir cypress
cd cypress

2.Initialize the project
npm init -y

3.Install cypress and required dependencies

npm install --save-dev cypress@14.2.0
npm install --save-dev @badeball/cypress-cucumber-preprocessor
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

4.Install cucumber full support from extensions in VSCode

Running tests
--------------------------------------
Open cypress in interactive mode
npx cypress open
All installed browsers will be displayed.Choose one to run the tests interactively.

Run in headless mode:
use npx cypress run

Generate test reports
--------------------------------------
Merge report files
npm run merge-reports

Generate HTML report
npm run generate-report

Final reports will be available at:
cypress/reports/mochawesome.html

Project structure overview:
--------------------------------------
cypress/
├── e2e/                  # Feature files
├── step_definitions/     # Step Definitions
├── pages/                # Page Object Model
├── fixtures/             # JSON test data
├── reports/              # Mochawesome test reports
├── screenshots/          # Auto screenshots (on failure)
├── videos/               # Auto videos (on failure)
cypress.config.js         # Main Cypress config file
package.json   


This is a sample project intended for learning and demonstration. Feel free to fork and extend it as needed!

