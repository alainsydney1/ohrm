Feature: Login flows for OrangeHRM
    Scenario: Authorized user attempts to login
        Given The user was an authorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "Admin"
        Then The user should see the Dashboard page

    Scenario: Unauthorized user attempts to login
        Given The user was an unauthorized user of the OrangeHRM
        When The user access the OrangeHRM
        Then The user should see the login page
        When The user logs in as an "non-Admin"
        Then The user should see invalid credential error
