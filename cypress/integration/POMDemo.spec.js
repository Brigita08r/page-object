import LoginPage from "./PageObject/LoginPage";

describe("Cypress POM Test Suite", function () {
  it("Login with valid credentials", function () {
    const login = new LoginPage();
    login.navigate();
    login.enterEmail("admin@yourstore.com");
    login.enterPassword("admin");
    login.submit();
    cy.url().should("be.equal", "https://admin-demo.nopcommerce.com/admin/");
  });
});
