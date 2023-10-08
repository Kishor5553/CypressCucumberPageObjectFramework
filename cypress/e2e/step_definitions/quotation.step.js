import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '../../pages/HomePage';

When('User click on the request quotation tab', () => {
  homePage.clickOnRequestQuotationTab();
});
Then('User enters information', (table) => {
  table.hashes().forEach((row) => {
    homePage.enterQuotationInfo(row.Incidents, row.Registration, row.AnnualMileage, row.EstimatedValue);
  });
});
Then('User click on save quotation button', () => {
    homePage.clickOnSaveQuotationBtn();
});
Then('The quotation success message {string} is displayed', (quotationSavedSuccessMessage) => {
    homePage.elements.quotationSuccessMessage().should('contain.text', quotationSavedSuccessMessage);
    // cy.get('html>body').should('contains.text', "30")
});
When("User click on the retrieve quotation tab", ()=> {
    homePage.clickOnRetrieveQuotationTab();
})
When("Enter valid quotation number {string} and click on the retrieve button", (identificationNumber)=> {
    homePage.enterIdentificationNumber(identificationNumber);
    homePage.clickOnRetrieveButton();
})
Then("User is able to see quotation", () => {
    homePage.elements.retrieveQuotation().should('be.visible');
})