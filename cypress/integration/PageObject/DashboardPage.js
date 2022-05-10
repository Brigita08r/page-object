class DashboardPage {
  navigateToProducts() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/List");
  }

  navigateToCategores() {
	  cy.visit("https://admin-demo.nopcommerce.com/Admin/Category/List")
  }

  navigateToManufacturers() {
	  cy.visit("https://admin-demo.nopcommerce.com/Admin/Manufacturer/List")
  }
}

export default DashboardPage;
