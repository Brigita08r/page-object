class CommonActions {
  constructor(searchType) {
    this.searchType = searchType;
  }
  clickSearchAfterFormFillIn() {
    cy.get(`[id=search-${this.searchType}]`).click();
  }
}
export default CommonActions;
