Feature: Search and create functionality flow for vacancies page in OrangeHRM
    Scenario: Authorized user search for a job title in vacancies page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user navigates to Vacancies tab
        Then The user should see the Vacancies page
        When The user search for the job title "Account Assistant"
        And The user click on the "Search" button
        Then The results for "Account Assistant" are shown

    Scenario: Authorized user search for a vacancy in vacancies page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user navigates to Vacancies tab
        Then The user should see the Vacancies page
        When The user search for the vacancy "Junior Account Assistant"
        And The user click on the "Search" button
        Then The results for "Junior Account Assistant" are shown

    Scenario: Authorized user search for a hiring manager in vacancies page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user navigates to Vacancies tab
        Then The user should see the Vacancies page
        When The user search for the hiring manager "Kevin Mathews"
        And The user click on the "Search" button
        Then The results for "Kevin Mathews" are shown

    Scenario: Authorized user search for a status in vacancies page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user navigates to Vacancies tab
        Then The user should see the Vacancies page
        When The user search for the status "Active"
        And The user click on the "Search" button
        Then The results for "Active" are shown

    Scenario: Authorized user creates new vacancy
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user navigates to Vacancies tab
        Then The user should see the Vacancies page
        When The user fills out add vacancy form

    Scenario: Authorized user skips required field in add vacancy form
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user navigates to Vacancies tab
        Then The user should see the Vacancies page
        When The user skips required fields in add vacancy form
        Then The inline error message is displayed