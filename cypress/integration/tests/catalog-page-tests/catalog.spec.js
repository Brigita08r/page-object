import OrdersPage from "../../PageObject/Sales/OrdersPage";
import LoginPage from "../../PageObject/BasicActions/LoginPage";
import NavigationPage from "../../PageObject/BasicActions/NavigationPage";

const ordersPage = new OrdersPage("orders");
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

  it("Fill in orders page and click search from common actions", function () {
    dashboardPageNavigation.navigateToOrders();
    ordersPage.enterBillingEmailAddress("victoria_victoria@nopCommerce.com");
    ordersPage.clickSearchAfterFormFillIn();
  });
});
