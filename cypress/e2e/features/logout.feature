Feature: Logout Scenario

    User should able to logout successfully

    Background:
        Given A web browser is at the Guru99 login page
    @smoke
    Scenario: Successful login using valid credentials
        When User enters the username "kishor@gmail.com", the password "Kishor123", and clicks on the login button
        Then User should be on the home page
        Then User click on the logout button
        Then User should logout and on the login page
