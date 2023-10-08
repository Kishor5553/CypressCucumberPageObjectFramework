Feature: Quotation Scenarios

    Feature Login functionality will work depending on the user credentials.

    Background:
        Given A web browser is at the Guru99 login page
        When User enters the username "kishor@gmail.com", the password "Kishor123", and clicks on the login button
        Then User should be on the home page

    Scenario: Request and save the quotation
        When User click on the request quotation tab
        Then User enters information
            | Incidents | Registration | AnnualMileage | EstimatedValue |
            | 1         | AB01XY1234   | 10000         | 500000         |
        Then User click on save quotation button
        Then The quotation success message "You have saved this quotation!" is displayed

    Scenario: Retrieve quotation
        When User click on the retrieve quotation tab
        And Enter valid quotation number "30851" and click on the retrieve button
        Then User is able to see quotation
