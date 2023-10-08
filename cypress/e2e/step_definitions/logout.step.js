import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../pages/LoginPage';
import { homePage } from '../../pages/HomePage';

Then('User click on the logout button', () => {
  homePage.clickLogoutBtn();
});
Then('User should logout and on the login page', () => {
  loginPage.elements.loginBtn().should('be.visible');
});
