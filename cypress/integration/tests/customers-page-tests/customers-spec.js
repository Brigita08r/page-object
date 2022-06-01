import LoginPage from "../../PageObject/BasicActions/LoginPage";
import VendorsPage from "../../PageObject/3-Customers/VendorsPage";
import NavigationPage from "../../PageObject/BasicActions/NavigationPage";

const vendorsPage = new VendorsPage();
const login = new LoginPage();
const dashboardPageNavigation = new NavigationPage();

describe(" beforeEach: login to application", () => {
  beforeEach(() => {
    login.navigate();
    login.enterEmail("admin@yourstore.com");
    login.enterPassword("admin");
    login.submit();
    cy.url().should("be.equal", "https://admin-demo.nopcommerce.com/admin/");
  });

  it("Search in for vendor in vendors page", function () {
    dashboardPageNavigation.navigateToVendors();
    vendorsPage.typeSearchName("Vendor 1");
    vendorsPage.clickSearch();
  });
});
