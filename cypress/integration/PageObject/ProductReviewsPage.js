class ProductReviewsPage {
  selectDateFrom(dateOfDay) {
    cy.get("[id=CreatedOnFrom]").type(dateOfDay);
  }

  selectCreatedTo(dateOfDayTo) {
    cy.get("[id=CreatedOnTo]").type(dateOfDayTo);
  }

  enterMessage(messageText) {
    cy.get("[id=SearchText]").type(messageText);
    return this;
  }

  selectApproved(approvedValue) {
    cy.get("[id=SearchApprovedId]").type(approvedValue);
  }

  enterProduct(enteredProduct) {
    cy.get("[id=search-product-name]").type(enteredProduct);
    return this;
  }

  clickSearch() {
    cy.get("[id=search-productreviews]").click();
  }

  selectProductReview(productReview) {}
  appproveProductReviews(selectedProductReview) {
    cy.get("[id=approve-selected]").click();
  }

  selectAndAppove() {
    selectProductReview();
    appproveProductReviews();
  }
}
export default ProductReviewsPage;
