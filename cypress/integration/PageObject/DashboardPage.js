class DashboardPage {
  navigateToProducts() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/List");
  }

  typeProductName(productName) {
    cy.get("[id=SearchProductName]").type(productName);
    return this;
  }
}

export default DashboardPage;
