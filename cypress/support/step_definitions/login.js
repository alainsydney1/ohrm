import { TestObject } from "../../pageobjects/test_objects";
import { TestData } from "../../fixtures/test_data";

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const testObject = new TestObject();
const testData = new TestData();

Given("The user was an authorized user of the OrangeHRM", () => {
  //No steps required
});

Given("The user was an unauthorized user of the OrangeHRM", () => {
  //No steps required
});

When("The user access the OrangeHRM", () => {
  cy.visit("/web/index.php/auth/login");
});

Then("The user should see the login page", () => {
  cy.get(testObject.loginBranding).should("be.visible");
  cy.get(testObject.loginTitle)
    .should("have.text", testData.loginTitleText)
    .should("be.visible");
  cy.get(testObject.loginCredentialsUser)
    .should("have.text", testData.credentialUsername)
    .should("be.visible");
  cy.get(testObject.loginCredentialPassword)
    .should("have.text", testData.credentialPassword)
    .should("be.visible");
  cy.get(testObject.usernameField).should("be.visible");
  cy.get(testObject.passwordField).should("be.visible");
  cy.get(testObject.loginButton).should("be.visible");
  cy.get(testObject.forgotPassword)
    .should("have.text", testData.forgotPasswordText)
    .should("be.visible");
});

When("The user logs in as an {string}", (userType) => {
  switch (userType) {
    case "Admin":
      cy.get(testObject.usernameField)
        .should("be.visible")
        .click({ force: true })
        .type(testData.usernameAdmin);

      cy.get(testObject.passwordField)
        .should("be.visible")
        .click({ force: true })
        .type(testData.passwordAdmin);
      cy.get(testObject.loginButton)
        .should("be.visible")
        .click({ force: true });
      cy.wait(3);
      break;

    case "non-Admin":
      cy.get(testObject.usernameField)
        .should("be.visible")
        .click({ force: true })
        .type(testData.usernameNonAdmin);

      cy.get(testObject.passwordField)
        .should("be.visible")
        .click({ force: true })
        .type(testData.passwordNonAdmin);
      cy.get(testObject.loginButton)
        .should("be.visible")
        .click({ force: true });
  }
});

Then("The user should see the Dashboard page", () => {
  cy.get(testObject.dashboardTitle)
    .should("have.text", testData.dashboardText)
    .should("be.visible");
  cy.get(testObject.dashboardWidget).should("be.visible");
});

Then("The user should see invalid credential error", () => {
  cy.get(testObject.invalidCredential)
    .should("have.text", testData.invalidCredentialError)
    .should("be.visible");
});