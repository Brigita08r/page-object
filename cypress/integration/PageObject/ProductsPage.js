class ProductsPage {
  enterProductName(productName) {
    cy.get("[id=SearchProductName]").type(productName);
    return this;
  }

  selectCategory(categoryValue) {
    cy.get("[id=SearchCategoryId]").select(categoryValue);
  }

  searchSubCategories() {
    cy.get("[id=SearchIncludeSubCategories]").check();
  }

  selectManufacturer(manufacturerValue) {
    cy.get("[id=SearchManufacturerId]").select(manufacturerValue);
  }

  selectVendor(vendorValue) {
    cy.get("[id=SearchVendorId]").select(vendorValue);
  }

  selectWarehouse(warehouseValue) {
    cy.get("[id=SearchWarehouseId]").select(warehouseValue);
  }

  selectProductType(productType) {
    cy.get("[id=SearchProductTypeId]").select(productType);
  }

  selectPublished(publishedValue) {
    cy.get("[id=SearchPublishedId]").select(publishedValue);
  }

  fillInSKU(productSKU) {
    cy.get("[id=GoDirectlyToSku]").type(productSKU);
    return this;
  }

  clickSearch(){
	  cy.get("[id=search-products]").click()
  }

  verifyNoSearchResults() {
	  cy.get("[class=dataTables_empty]").should("have.text", "No data available in table")
  }
}
export default ProductsPage;
