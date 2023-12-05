import { TestObject } from "../../pageobjects/test_objects";
import { TestData } from "../../fixtures/test_data";

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const testObject = new TestObject();
const testData = new TestData();

Given("The user was an authorized user of the OrangeHRM", () => {
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

When("The user navigates to Recruitment page", () => {
  cy.get(testObject.sidePanel)
    .contains(testObject.recruitmentMenu, testData.recruitmentText)
    .should("be.visible")
    .click({ force: true });
});

Then("The user should see the Candidates page", () => {
  cy.get(testObject.recruitmentTitle)
    .should("have.text", testData.recruitmentText)
    .should("be.visible");
  cy.get(testObject.recruitmentTab)
    .contains(testObject.candidatesTab, testData.candidatesText)
    .should("be.visible");
  cy.get(testObject.recruitmentTab)
    .contains(testObject.vacanciesTab, testData.vacanciesText)
    .should("be.visible");
  cy.get(testObject.tableHeader)
    .should("have.text", testData.candidates)
    .should("be.visible");
});

Then("the user navigate to the dashboard page", () => {
  cy.request("GET", testData.actionSummaryUrl).then((response) => {
    expect(response).to.have.property("body");
    expect(response.body).to.have.property("data").to.be.an("array").not.to.be
      .empty;

    const actionSummaryResponse = response.body.data;
    actionSummaryResponse.forEach((action) => {
      expect(action).to.have.property("id").to.be.a("number");
      expect(action).to.have.property("group").to.be.a("string");
      expect(action).to.have.property("pendingActionCount").to.be.a("number");
    });

    expect(response.body).to.have.property("meta").to.be.an("array");
    expect(response.body).to.have.property("rels").to.be.an("array");
  });
});

Then("the user navigate to the Directory page", () => {
  cy.request("GET", testData.employeesUrl).then((response) => {
    expect(response).to.have.property("body");
    expect(response.body).to.have.property("data").to.be.an("array").not.to.be
      .empty;

    const employeeResponse = response.body.data;
    employeeResponse.forEach((employee) => {
      expect(employee).to.have.property(testData.empNumber);
      expect(employee).to.have.property(testData.lastName);
      expect(employee).to.have.property(testData.firstName);
      expect(employee).to.have.property(testData.middleName);
      expect(employee).to.have.property(testData.terminationId);

      expect(employee).to.have.property(testData.jobTitle);
      expect(employee.jobTitle).to.have.property(testData.id);
      expect(employee.jobTitle).to.have.property(testData.title);
      expect(employee.jobTitle).to.have.property(testData.isDeleted);

      expect(employee).to.have.property(testData.subunit);
      expect(employee.subunit).to.have.property(testData.id);
      expect(employee.subunit).to.have.property(testData.name);

      expect(employee).to.have.property(testData.location);
      expect(employee.location).to.have.property(testData.id);
      expect(employee.location).to.have.property(testData.name);
    });
  });
});

Then("the user navigate to the Admin page", () => {
  cy.request("GET", testData.usersUrl).then((response) => {
    expect(response).to.have.property("body");
    expect(response.body).to.have.property("data").to.be.an("array").not.to.be
      .empty;

    const usersResponse = response.body.data;
    usersResponse.forEach((users) => {
      expect(users).to.have.property(testData.id);
      expect(users).to.have.property(testData.userName);
      expect(users).to.have.property(testData.deleted);
      expect(users).to.have.property(testData.status);

      expect(users).to.have.property(testData.employee);
      expect(users.employee).to.have.property(testData.empNumber);
      expect(users.employee).to.have.property(testData.employeeId);
      expect(users.employee).to.have.property(testData.firstName);
      expect(users.employee).to.have.property(testData.middleName);
      expect(users.employee).to.have.property(testData.lastName);
      expect(users.employee).to.have.property(testData.terminationId);

      expect(users).to.have.property(testData.userRole);
      expect(users.userRole).to.have.property(testData.id);
      expect(users.userRole).to.have.property(testData.name);
      expect(users.userRole).to.have.property(testData.displayName);
    });
  });
});
