class NavigationPage {
  navigateToProducts() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/List");
  }

  navigateToCategores() {
	  cy.visit("https://admin-demo.nopcommerce.com/Admin/Category/List")
  }

  navigateToManufacturers() {
	  cy.visit("https://admin-demo.nopcommerce.com/Admin/Manufacturer/List")
  }

  navigateToProductReviews() {
	  cy.visit("https://admin-demo.nopcommerce.com/Admin/ProductReview/List")
  }

  navigateToProductTags() {
	  cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/ProductTags")
  }

  
}

export default NavigationPage;
