import CategoriesPage from "../../PageObject/1-Catalog/CategoriesPage";
import NavigationPage from "../../PageObject/BasicActions/NavigationPage";
import LoginPage from "../../PageObject/BasicActions/LoginPage";
import ManufacturersPage from "../../PageObject/1-Catalog/ManufacturersPage";
import ProductsPage from "../../PageObject/1-Catalog/ProductsPage";

const login = new LoginPage();
const dashboardPageNavigation = new NavigationPage();
const productsPage = new ProductsPage();
const categoriesPage = new CategoriesPage();
const manufacturersPage = new ManufacturersPage();

describe(" beforeEach: login to application", () => {
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
    productsPage.verifyNoSedlarchResults();
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
