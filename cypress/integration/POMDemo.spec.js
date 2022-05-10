import DashboardPage from "./PageObject/DashboardPage";
import LoginPage from "./PageObject/LoginPage";

const login = new LoginPage();
const dashboardPageNavigation = new DashboardPage();

describe("login to application", () => {
  beforeEach(() => {
    login.navigate();
    login.enterEmail("admin@yourstore.com");
    login.enterPassword("admin");
    login.submit();
    cy.url().should("be.equal", "https://admin-demo.nopcommerce.com/admin/");
  });

  it("Navigate to products page list", function () {
    dashboardPageNavigation.navigateToProducts();
    dashboardPageNavigation.typeProductName("PC");
  });
});

