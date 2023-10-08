class HomePage {
  elements = {
    logoutBtn: () => cy.get('.button_to > .btn'),
    homeTab: () => cy.get("#ui-id-1"),
    requestQuotationTab: () => cy.get("#ui-id-2"),
    retrieveQuotationTab: () => cy.get("#ui-id-3"),
    profileTab: () => cy.get("#ui-id-4"),
    editProfileTab: () => cy.get("#ui-id-5"),
    incidents: () => cy.get("#quotation_incidents"),
    registration: () => cy.get("#quotation_vehicle_attributes_registration"),
    annualMileage: () => cy.get("#quotation_vehicle_attributes_mileage"),
    estimatedValue: () => cy.get("#quotation_vehicle_attributes_value"),
    saveQuotationBtn: () => cy.get('#new_quotation > .actions > .btn-success'),
    quotationSuccessMessage: ()=> cy.get('body > :nth-child(1)'),
    identificationNumber: () => cy.get('form > [type="text"]'),
    retrieveButton: () => cy.get("#getquote"),
    retrieveQuotation: () => cy.get('font'),
    updateUserButton: () => cy.get('#edit_user_ > .actions > .btn'),
    profileTitle: ()=> cy.get('#showtitle'),
    cityName: ()=> cy.get('#user_address_attributes_city'),
    profileAddressCityName: ()=> cy.get('#showcity'),

  };
  clickLogoutBtn() {
    this.elements.logoutBtn().click();
  }
  clickOnHomeTab() {
    this.elements.homeTab().click();
  }
  clickOnRequestQuotationTab() {
    this.elements.requestQuotationTab().click();
  }
  clickOnRetrieveQuotationTab() {
    this.elements.retrieveQuotationTab().click();
  }
  clickOnProfileTab() {
    this.elements.profileTab().click();
  }
  clickOnEditProfileTab() {
    this.elements.editProfileTab().click()
  }
  enterQuotationInfo(inci, reg, mileage, estimate) {
    this.elements.incidents().type(inci);
    this.elements.registration().type(reg);
    this.elements.annualMileage().type(mileage);
    this.elements.estimatedValue().type(estimate);
  }
  clickOnSaveQuotationBtn () {
    this.elements.saveQuotationBtn().click()
  }
  enterIdentificationNumber(identinumber) {
    this.elements.identificationNumber().type(identinumber)
  }
  clickOnRetrieveButton() {
    this.elements.retrieveButton().click()
  }
  clickOnUpdateUserButton() {
    this.elements.updateUserButton().click()
  }
  typeCityName(city) {
    this.elements.cityName().type(city);
  }
}

export const homePage = new HomePage();
