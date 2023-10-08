Feature: Login Scenarios

    Login functionality will work depending on the user credentials.

    Background:
        Given A web browser is at the Guru99 login page
    @smoke
    Scenario: Successful login using valid credentials
        When User enters the username "kishor@gmail.com", the password "Kishor123", and clicks on the login button
        Then User should be on the home page
    @smoke
    Scenario: Unsuccessful login using invalid username
        When A user provides invalid credentials, and clicks on the login button
            | username       | password  |
            | kish@gmail.com | Kishor123 |
        Then The error message "Enter your Email address and password correct" is displayed

    Scenario: Unsuccessful login using invalid password
        When A user provides invalid credentials, and clicks on the login button
            | username         | password |
            | kishor@gmail.com | Kishor23 |
        Then The error message "Enter your Email address and password correct" is displayed

    Scenario: Unsuccessful login using invalid username and invalid password
        When A user provides invalid credentials, and clicks on the login button
            | username        | password |
            | kishr@gmail.com | Kish23   |
        Then The error message "Enter your Email address and password correct" is displayed