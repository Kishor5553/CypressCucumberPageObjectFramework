import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../pages/LoginPage';
import { homePage } from '../../pages/HomePage';

Given('A web browser is at the Guru99 login page', () => {
  cy.visit('https://demo.guru99.com/insurance/v1/index.php');
});

When(
  'User enters the username {string}, the password {string}, and clicks on the login button',
  (username, password) => {
    loginPage.submitLogin(username, password);
  },
);

When('A user provides invalid credentials, and clicks on the login button', (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password);
  });
});
Then('User should be on the home page', () => {
    homePage.elements.logoutBtn().should('be.visible');
});
Then('The error message {string} is displayed', (errorMessage) => {
  loginPage.elements.errorMessage().should('have.text', errorMessage);
});
