Feature: Profile Scenarios

    User is able to view and edit profile

    Background:
        Given A web browser is at the Guru99 login page
        When User enters the username "kishor@gmail.com", the password "Kishor123", and clicks on the login button
        Then User should be on the home page
    @smoke
    Scenario: View profile
        When User click on profile tab
        Then User is able to see profile information

    Scenario: Edit profile
        When User click on edit profile tab
        Then User update the city name "Pune"
        Then User click on the update user button
        Then User click on profile tab
        Then User is able to see in profile, address includes "Pune"