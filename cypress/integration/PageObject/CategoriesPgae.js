class CategoriesPage {
  enterCategoryName(categoryName) {
    cy.get("[id=SearchCategoryName]").type(categoryName);
    return this;
  }

  selectPublished(publishedValue) {
    cy.get("[id=SearchPublishedId]").select(publishedValue);
  }

  clickSearch() {
    cy.get("[id=search-categories]").click();
  }

  verifySearchResult(searchResults) {
    cy.get("[id=categories-grid]").should("have.text", searchResults);
  }
}
export default CategoriesPage;
