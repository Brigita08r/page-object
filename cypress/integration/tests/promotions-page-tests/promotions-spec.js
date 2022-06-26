import LoginPage from "../../PageObject/BasicActions/LoginPage";
import NavigationPage from "../../PageObject/BasicActions/NavigationPage";
import DiscoutsPage from "../../PageObject/4-Promotions/DiscountsPage";

const discoutsPage = new DiscoutsPage();
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

  it("Search discounts by discount type", function () {
    dashboardPageNavigation.navigateToDiscountsInPromotions();
    discoutsPage.selecDiscountType();
  });
});
