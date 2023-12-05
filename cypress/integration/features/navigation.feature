 Feature: Navigation functionality through API for OrangeHRM
        Scenario: Authorized user navigates to different pages
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page
        When The user navigates to Recruitment page
        Then The user should see the Candidates page
        And the user navigate to the dashboard page
        And the user navigate to the Directory page
        And the user navigate to the Admin page