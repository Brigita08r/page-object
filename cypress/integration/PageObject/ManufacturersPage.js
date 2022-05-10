class ManufacturersPage {
  enterManufacturerName(manufacturerName) {
    cy.get("[id=SearchManufacturerName]").type(manufacturerName);
    return this;
  }

  selectPublished(publishedValue) {
    cy.get("[id=SearchPublishedId]").select(publishedValue);
  }

  clickSearch() {
    cy.get("[id=search-manufacturers]").click();
  }

  editManufacture(selectedManufacture){
    const editPath = "https://admin-demo.nopcommerce.com/Admin/Manufacturer/Edit/"
	  cy.visit(editPath + selectedManufacture)
  }
}
export default ManufacturersPage;
