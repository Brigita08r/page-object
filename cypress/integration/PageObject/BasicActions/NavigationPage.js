class NavigationPage {
  navigateToProductsInCatalog() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/List");
  }

  navigateToCategoriesInCatalog() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Category/List");
  }

  navigateToManufacturersInCatalog() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Manufacturer/List");
  }

  navigateToProductReviewsInCatalog() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/ProductReview/List");
  }

  navigateToProductTagsInCatalog() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/ProductTags");
  }

  navigateToOrdersInSales() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Order/List");
  }

  navigateToVendorsInCutomers() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Vendor/List");
  }

  navigateToNewsletterSubscriptionsInPromotions() {
    cy.visit(
      "https://admin-demo.nopcommerce.com/Admin/NewsLetterSubscription/List"
    );
  }

  navigateToNewsCommentInContentManagement() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/News/NewsComments");
  }

  navigateToCountriesInConfiguration() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Country/List");
  }

  navigateToSystemInfoInSystem() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Common/SystemInfo");
  }

  navigateToLowStockInReports() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Report/LowStock");
  }

  navigateToDocumentationInHelp() {
    cy.visit(
      "https://docs.nopcommerce.com/en/index.html?utm_source=admin-panel&utm_medium=menu&utm_campaign=documentation&utm_content=help"
    );
  }
}

export default NavigationPage;
