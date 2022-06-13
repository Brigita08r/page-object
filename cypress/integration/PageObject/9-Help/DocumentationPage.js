class DocumentationPage {
  verifyPageTitle(pageTitle) {
    cy.get("[id=nopcommerce-documentation]").should("have.text", pageTitle);
  }

  searchInDocumentationPage(searchValue) {
    cy.get("[id=search]").type(searchValue);
  }

  verifyFoundSearchResults(searchResults) {
	cy.wait(5000)
    cy.get("#search-results > div.sr-items > div:nth-child(1) > div.item-title > a > mark").should("have.text", searchResults);
  }

  navigateToNopCommerceForums() {
	  cy.get(["id=forums"]).click()
  }
}

export default DocumentationPage;
