import CommonActions from "../BasicActions/CommonActions";

class VendorsPage extends CommonActions {
  typeSearchName(searchName) {
    cy.get("[id=SearchName]").type(searchName);
  }

  clickSearch() {
    cy.get("[id=search-vendors]").click();
  }
}

export default VendorsPage;
