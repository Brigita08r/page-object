import CommonActions from "../BasicActions/CommonActions";

class OrdersPage extends CommonActions {
  selectStartDate(startDate) {
    cy.get("[id=StartDate]").type(startDate);
  }

  selectEndDate(endDate) {
    cy.get("[id=EndDate]").type(endDate);
  }

  selectWarehouse(warehouseValue) {
    cy.get("[id=WarehouseId]").select(warehouseValue);
  }

  searchProduct(productName) {
    cy.get("[id=search-product-name]").type(productName);
  }
  selectOrderStatus(orderStatus) {
    cy.get("[id=OrderStatusIds]").select(orderStatus);
    //return orderStatus;
    
  }
  selectPaymentStatus(paymentStatus) {
    cy.get("[id=PaymentStatusIds]").type(paymentStatus);
  }
  selectShippingStatus(shippingStatus) {
    cy.get("[id=ShippingStatusIds]").type(shippingStatus);
  }
  selectVendor(vendorValue) {
    cy.get("[id=VendorId]").select(vendorValue);
  }
  enterBillingPhoneNumber(billingPhoneNumber) {
    cy.get("[id=BillingPhone").type(billingPhoneNumber);
    return this;
  }
  enterBillingEmailAddress(billingEmailAddress) {
    cy.get("[id=BillingEmail").type(billingEmailAddress);
    return this;
  }
  enterBillingLastName(billingLastName) {
    cy.get("[id=BillingLastName").type(billingLastName);
    return this;
  }
  selectBillingCountry(billingCountry) {
    cy.get("[id=BillingCountryId").select(billingCountry);
  }
  selectPaymentMethod(paymentMethod) {
    cy.get("[id=PaymentMethodSystemName").select(paymentMethod);
  }
  enterOrderNotes(orderNotes) {
    cy.get("[id=OrderNotes").type(orderNotes);
    return this;
  }
  navigateDirectlyToOrder(orderValue) {
    cy.get("[id=GoDirectlyToCustomOrderNumber").type(orderValue);
    //open new window?
  }

  //   clickSearchAsfterFormFillIn() {
  //     clickSearchAfterFormFillIn("orders");
  //   }
  constructor(searchType) {
    super(searchType);
  }
  clickSearchAfterFormFillIn() {
    super.clickSearchAfterFormFillIn("orders");
  }
}
export default OrdersPage;
