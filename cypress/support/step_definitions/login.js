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

When("The user search for the candidate name {string}", (candidateName) => {
  cy.get(testObject.candidateSearch)
    .should("be.visible")
    .click({ force: true })
    .type(candidateName);
  cy.get(testObject.candidateDropdown)
    .should("contain.text", candidateName)
    .first()
    .click({ force: true });
});

// When(
//   "The user search for the date range {string} to {string}",
//   (dateFrom, dateTo) => {
//     cy.get(testObject.dateFrom)
//       .should("be.visible")
//       .click({ force: true })
//       .type(dateFrom);
//     cy.get(testObject.closeButton)
//       .should("be.visible")
//       .click({ force: true });
//     cy.get(testObject.dateTo)
//       .should("be.visible")
//       .click({ force: true })
//       .type(dateTo);
//     cy.get(testObject.closeButton)
//       .should("be.visible")
//       .click({ force: true });
//   }
// );

// When("The user search for the method of application {string}", (methodType) => {
//   switch (methodType) {
//     case "Manual":
//       cy.get(testObject.methodSelector)
//         .should("be.visible")
//         .click({ force: true });
//       cy.get(testObject.selectorTwo)
//         .should("be.visible")
//         .should("have.text", methodType)
//         .click({ force: true });
//       break;

//     case "Online":
//       cy.get(testObject.methodSelector)
//         .should("be.visible")
//         .click({ force: true });
//       cy.get(testObject.selectorThree)
//         .should("be.visible")
//         .should("have.text", methodType)
//         .click({ force: true });
//       break;
//   }
// });

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

// Then(
//   "The results for the dates {string} to {string} are shown",
//   (dateFrom, dateTo) => {
//     // Ensure that there are rows in the table
//     cy.get(testObject.rowCard).should("have.length.gt", 0);

//     // Regular expression pattern for the date format (YYYY-MM-DD)
//     const datePattern = /\b\d{4}-\d{2}-\d{2}\b/g;

//     // Flag to indicate if at least one valid date (within range) was found in any row
//     let validDateFound = false;

//     // Iterate over each row in the table
//     cy.get(testObject.rowCard).each(($row) => {
//       // Extract the text content of the row
//       cy.wrap($row)
//         .invoke("text")
//         .then((rowText) => {
//           // Find all matches of the date pattern in the row text
//           const matches = rowText.match(datePattern);

//           // Check if any match is within the specified date range
//           if (matches) {
//             matches.forEach((matchedDate) => {
//               const currentDate = new Date(matchedDate);
//               const startRange = new Date(dateFrom);
//               const endRange = new Date(dateTo);

//               // Check if the matched date is within the specified range
//               if (currentDate >= startRange && currentDate <= endRange) {
//                 validDateFound = true;
//               }
//             });
//           }
//         });
//     });

//     // Use .should to assert that at least one valid date was found in any row
//     expect(validDateFound).to.be.true;

//     // After checking all rows, ensure that the toast notification has the expected message
//     cy.get(testObject.toastNotif).should("have.text", testData.toastMessage);
//   }
// );

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
      expect(users.employee).to.have.property(testData.terminationId).to.be
        .null;

      expect(users).to.have.property(testData.userRole);
      expect(users.userRole).to.have.property(testData.id);
      expect(users.userRole).to.have.property(testData.name);
      expect(users.userRole).to.have.property(testData.displayName);
    });
  });
});

When("The user fills out add candidate form", () => {
  cy.visit("/web/index.php/recruitment/addCandidate");

  cy.get(testObject.formFirstName).should("be.visible").type(testData.john);

  cy.get(testObject.formMiddleName).should("be.visible").type(testData.smith);

  cy.get(testObject.formLastName).should("be.visible").type(testData.doe);

  cy.get(testObject.formVacancy).click();
  cy.contains(testObject.formVacancyDropdown, testData.associateIt)
    .should("be.visible")
    .click();

  cy.get(testObject.formEmail).should("be.visible").type(testData.johnEmail);

  cy.get(testObject.formContact)
    .should("be.visible")
    .type(testData.johnContact);

  cy.get(testObject.formSaveBtn).should("be.visible").click();
});

Then("The candidate is created successfully", () => {
  cy.contains(testObject.toastSuccess, testData.successMessage);
});

When("The user skips required fields in add candidate form", () => {
  cy.visit("/web/index.php/recruitment/addCandidate");

  cy.get(testObject.formSaveBtn).should("be.visible").click();
});

Then("The inline error message is displayed", () => {
  cy.get(testObject.formRequired)
    .should("be.visible")
    .each(($span) => {
      cy.wrap($span).contains(testData.required);
    });
});

