import CommonActions from "../BasicActions/CommonActions";

class VendorsPage extends CommonActions {
  typeSearchName(searchName) {
    cy.get("[id=SearchName]").type(searchName);
  }

  typeSearchEmail(searchEmail) {
    cy.get("[id=SearchEmail]").type(searchEmail)
  }

  clickSearch() {
    cy.get("[id=search-vendors]").click();
    cy.wait(500)
  }

  verifySearchedResultIsPresentByName(nameResult) {
    cy.contains("td", nameResult).parent("tr");
  }

  verifySearchedResultIsPresentByEmail(emailResult) {
    cy.contains("td", emailResult).parent("tr");
  }
}

export default VendorsPage;
