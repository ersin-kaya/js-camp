export default class MessagesForCustomersInEnglish {
  constructor() {
    this.successMessageForGetAllMethods = "Customers were listed.";
    this.errorMessageForGetAllMethods =
      "An error occurred while attempting to list users.";

    this.successMessageForGetByIdMethods = "The customer was listed.";

    this.successMessageForAddMethods =
      "The customer has been successfully added.";
    this.errorMessageForAddMethods = "Failed to add customer.";

    this.successMessageForUpdateMethods = "The customer has been updated.";
    this.errorMessageForDeleteMethods = "Failed to update the customer.";

    this.successMessageForDeleteMethods =
      "The customer was successfully deleted.";
    this.errorMessageForDeleteMethods = "The customer could not be deleted.";
  }

  static errorMessageNotAnAge = "This value is not an age.";
}
