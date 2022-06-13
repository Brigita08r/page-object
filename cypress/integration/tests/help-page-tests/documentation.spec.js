import DocumentationPage from "../../PageObject/9-Help/DocumentationPage";
import LoginPage from "../../PageObject/BasicActions/LoginPage";
import NavigationPage from "../../PageObject/BasicActions/NavigationPage";

const documentationPage = new DocumentationPage();
const login = new LoginPage();
const dashboardPageNavigation = new NavigationPage();

describe("befoeEach: login to application", () => {
  beforeEach(() => {
    login.navigate();
    login.enterEmail("admin@yourstore.com");
    login.enterPassword("admin");
    login.submit();
    cy.url().should("be.equal", "https://admin-demo.nopcommerce.com/admin/");
  });

  it("Verify page title nopCommerce Documentation is present on page", () => {
    dashboardPageNavigation.navigateToDocumentationInHelp();
    documentationPage.verifyPageTitle("nopCommerce Documentation");
  });

  it("Search for forums in search window", () => {
    dashboardPageNavigation.navigateToDocumentationInHelp();
    documentationPage.searchInDocumentationPage("Forums");
    documentationPage.verifyFoundSearchResults("Forums");
  });

  it("Open nopCommerce forums page", () => {
    dashboardPageNavigation.navigateToDocumentationInHelp();
    documentationPage.navigateToNopCommerceForums();
  });
});
