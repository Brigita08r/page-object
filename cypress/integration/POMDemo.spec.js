import CategoriesPage from "./PageObject/CategoriesPgae";
import DashboardPage from "./PageObject/DashboardPage";
import LoginPage from "./PageObject/LoginPage";
import ManufacturersPage from "./PageObject/ManufacturersPage";
import ProductsPage from "./PageObject/ProductsPage";

const login = new LoginPage();
const dashboardPageNavigation = new DashboardPage();
const productsPage = new ProductsPage();
const categoriesPage = new CategoriesPage();
const manufacturersPage = new ManufacturersPage();

describe("login to application", () => {
  beforeEach(() => {
    login.navigate();
    login.enterEmail("admin@yourstore.com");
    login.enterPassword("admin");
    login.submit();
    cy.url().should("be.equal", "https://admin-demo.nopcommerce.com/admin/");
  });

  it("Search in for product in products page", function () {
    dashboardPageNavigation.navigateToProducts();
    productsPage.enterProductName("PC");
    productsPage.selectCategory(1);
    productsPage.clickSearch();
    productsPage.verifyNoSearchResults();
  });

  it("Search for category in category page", function () {
    dashboardPageNavigation.navigateToCategores();
    categoriesPage.enterCategoryName("Electronics");
    categoriesPage.clickSearch();
    //categoriesPage.verifySearchResult("Electronics");
  });

  it("Edit manufacture number 1", function () {
      dashboardPageNavigation.navigateToManufacturers();
      manufacturersPage.editManufacture(2);
    });
});
