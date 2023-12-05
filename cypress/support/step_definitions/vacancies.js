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

When("The user search for the job title {string}", (jobType) => {
  switch (jobType) {
    case "Account Assistant":
      cy.get(testObject.jobTitleSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorTwo)
        .should("be.visible")
        .should("have.text", jobType)
        .click({ force: true });
      break;

    case "Chief Executive Officer":
      cy.get(testObject.jobTitleSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorThree)
        .should("be.visible")
        .should("have.text", jobType)
        .click({ force: true });
      break;

    case "Chief Financial Officer":
      cy.get(testObject.jobTitleSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFour)
        .should("be.visible")
        .should("have.text", jobType)
        .click({ force: true });
      break;

    case "Chief Technical Officer":
      cy.get(testObject.jobTitleSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFive)
        .should("be.visible")
        .should("have.text", jobType)
        .click({ force: true });
      break;
  }
});

When("The user search for the vacancy {string}", (vacancyType) => {
  switch (vacancyType) {
    case "Associate IT Manager":
      cy.get(testObject.vacancySelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorTwo)
        .should("be.visible")
        .should("have.text", vacancyType)
        .click({ force: true });
      break;

    case "Junior Account Assistant":
      cy.get(testObject.vacancySelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorThree)
        .should("be.visible")
        .should("have.text", vacancyType)
        .click({ force: true });
      break;

    case "Payroll Administrator":
      cy.get(testObject.vacancySelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFour)
        .should("be.visible")
        .should("have.text", vacancyType)
        .click({ force: true });
      break;

    case "Sales Representative":
      cy.get(testObject.vacancySelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFive)
        .should("be.visible")
        .should("have.text", vacancyType)
        .click({ force: true });
      break;

    case "Senior QA Lead":
      cy.get(testObject.vacancySelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorSix)
        .scrollIntoView()
        .should("be.visible")
        .should("have.text", vacancyType)
        .click({ force: true });
      break;
  }
});

When("The user search for the hiring manager {string}", (managerName) => {
  switch (managerName) {
    case "Odis Adalwin":
      cy.get(testObject.hiringManagerSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorTwo)
        .should("be.visible")
        .should("have.text", managerName)
        .click({ force: true });
      break;

    case "Linda Anderson":
      cy.get(testObject.hiringManagerSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorThree)
        .should("be.visible")
        .should("have.text", managerName)
        .click({ force: true });
      break;

    case "Dominic Chase":
      cy.get(testObject.hiringManagerSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFour)
        .should("be.visible")
        .should("have.text", managerName)
        .click({ force: true });
      break;

    case "Paul Collings":
      cy.get(testObject.hiringManagerSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFive)
        .should("be.visible")
        .should("have.text", managerName)
        .click({ force: true });
      break;

    case "Kevin Mathews":
      cy.get(testObject.hiringManagerSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorSix)
        .should("be.visible")
        .should("have.text", managerName)
        .click({ force: true });
      break;

    case "John99999 Smith99999":
      cy.get(testObject.hiringManagerSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorSeven)
        .scrollIntoView()
        .should("be.visible")
        .should("have.text", managerName)
        .click({ force: true });
      break;
  }
});

When("The user search for the status {string}", (statusType) => {
  switch (statusType) {
    case "Application Initiated":
      cy.get(testObject.statusSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorTwo)
        .should("be.visible")
        .should("have.text", statusType)
        .click({ force: true });
      break;

    case "Shortlisted":
      cy.get(testObject.statusSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorThree)
        .should("be.visible")
        .should("have.text", statusType)
        .click({ force: true });
      break;

    case "Rejected":
      cy.get(testObject.statusSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorFour)
        .should("be.visible")
        .should("have.text", statusType)
        .click({ force: true });
      break;

    case "Active":
      cy.get(testObject.statusSelector)
        .should("be.visible")
        .click({ force: true });
      cy.get(testObject.selectorTwo)
        .should("be.visible")
        .should("have.text", statusType)
        .click({ force: true });
      break;
  }
});

When("The user click on the {string} button", (buttonName) => {
  cy.get(testObject.recruitmentbutton)
    .contains(buttonName)
    .should("be.visible")
    .click({ force: true });
});

Then("The results for {string} are shown", (searchText) => {
  cy.get(testObject.rowCard)
    .should("have.length.gt", 0)
    .then(($rows) => {
      if ($rows.length > 0) {
        cy.get(testObject.rowCard).each(($row) => {
          cy.wrap($row).find(testObject.rowCell).should("contain", searchText);
        });
      } else {
        cy.get(testObject.toastNotif).should(
          "have.text",
          testData.toastMessage
        );
      }
    });
});


Then("The inline error message is displayed", () => {
  cy.get(testObject.formRequired)
    .should("be.visible")
    .each(($span) => {
      cy.wrap($span).contains(testData.required);
    });
});

When("The user navigates to Vacancies tab", () => {
  cy.get(testObject.vacanciesTab).should("be.visible").click({ force: true });
});

Then("The user should see the Vacancies page", () => {
  cy.get(testObject.tableHeader)
    .should("have.text", testData.vacancies)
    .should("be.visible");
});

When("The user fills out add vacancy form", () => {
  cy.visit("/web/index.php/recruitment/addJobVacancy");

  cy.get(testObject.vacancyInput)
    .should("be.visible")
    .type(testData.testVacancy);

  cy.get(testObject.formVacancy).click();
  cy.contains(testObject.formVacancyDropdown, testData.chiefExec)
    .should("be.visible")
    .click();

  cy.get(testObject.candidateSearch)
    .should("be.visible")
    .click({ force: true })
    .type(testData.managerName);
  cy.get(testObject.candidateDropdown)
    .should("contain.text", testData.managerName)
    .first()
    .click({ force: true });

  cy.get(testObject.formSaveBtn).should("be.visible").click();
});

When("The user skips required fields in add vacancy form", () => {
  cy.visit("/web/index.php/recruitment/addJobVacancy");

  cy.get(testObject.formSaveBtn).should("be.visible").click();
});

