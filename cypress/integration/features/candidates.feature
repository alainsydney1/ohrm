Feature: Search and create functionality flow for candidates page in OrangeHRM
    Scenario: Authorized user search for a job title in candidates page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user search for the job title "Account Assistant"
        And The user click on the "Search" button
        Then The results for "Account Assistant" are shown

    Scenario: Authorized user search for a vacancy in candidates page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user search for the vacancy "Senior QA Lead"
        And The user click on the "Search" button
        Then The results for "Senior QA Lead" are shown

    Scenario: Authorized user search for a hiring manager in candidates page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user search for the hiring manager "Kevin Mathews"
        And The user click on the "Search" button
        Then The results for "Kevin Mathews" are shown

    Scenario: Authorized user search for an application status in candidates page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user search for the status "Application Initiated"
        And The user click on the "Search" button
        Then The results for "Application Initiated" are shown

    Scenario: Authorized user search for a candididate name in candidates page
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        When The user search for the candidate name "Joe"
        And The user click on the "Search" button
        Then The results for "Joe" are shown

        Scenario: Authorized user creates new candidate
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        And The user fills out add candidate form
        Then The candidate is created successfully

        Scenario: Authorized user skips required field in add candidate form
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        And The user skips required fields in add candidate form
        Then The inline error message is displayed