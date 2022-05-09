class LoginPage {
  navigate() {
    cy.visit("https://admin-demo.nopcommerce.com/");
  }

  enterEmail(username) {
    cy.get("[id=Email]").clear();
    cy.get("[id=Email]").type(username);
    return this;
  }

  enterPassword(password) {
    cy.get("[id=Password]").clear();
    cy.get("[id=Password]").type(password);
    return this;
  }

  submit() {
    cy.get("[type=submit]").click();
  }
}
export default LoginPage;
