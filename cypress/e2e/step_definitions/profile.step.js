import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../pages/LoginPage';
import { homePage } from '../../pages/HomePage';

When('User click on profile tab', () => {
    homePage.clickOnProfileTab();
});

Then('User is able to see profile information', () => {
    homePage.elements.profileTitle().should('contain.text', "Mr");
});

When("User click on edit profile tab", ()=> {
    homePage.clickOnEditProfileTab();
})
Then("User update the city name {string}", (cityName)=> {
    homePage.typeCityName(cityName);
})
Then("User click on the update user button", ()=> {
    homePage.elements.updateUserButton().should('be.enabled');
    homePage.clickOnUpdateUserButton();
})
Then("User is able to see in profile, address includes {string}", (cityName)=>{
    homePage.elements.profileAddressCityName().should('contain.text', cityName);
})

