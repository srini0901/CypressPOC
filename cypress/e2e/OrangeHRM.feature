Feature: Login functionality

Scenario: user logs in with valid credentials
Given the user is on Orange HRM page
When User enters username
And User enters password
And User clicks on login button
Then Verify user is able to login to the portal