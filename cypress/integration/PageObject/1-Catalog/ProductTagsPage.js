class ProductTagsPage {
  searchTagName(tagName) {
    cy.get("[id=SearchTagName]").type(tagName);
  }

  deleteSelectedTagName(selectedTagName) {
    cy.get("[type=checkbox]").check().should("have.text", selectedTagName);
    cy.get("[id=delete-selected]").click();
    cy.get("[id=delete-selected-action-confirmation-submit-button]").click();
  }
}
export default ProductTagsPage;
