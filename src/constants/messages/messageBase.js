export default class MessageBase {
  constructor(messages) {
    this.successMessageForGetAllMethods =
      messages.successMessageForGetAllMethods;
    this.errorMessageForGetAllMethods = messages.errorMessageForGetAllMethods;

    this.successMessageForGetByIdMethods =
      messages.successMessageForGetByIdMethods;

    this.successMessageForAddMethods = messages.successMessageForAddMethods;
    this.errorMessageForAddMethods = messages.errorMessageForAddMethods;

    this.successMessageForUpdateMethods =
      messages.successMessageForUpdateMethods;
    this.errorMessageForUpdateMethods = messages.errorMessageForUpdateMethods;

    this.successMessageForDeleteMethods =
      messages.successMessageForDeleteMethods;
    this.errorMessageForDeleteMethods = messages.errorMessageForDeleteMethods;
  }

  static errorMessageEntityHasNoId = "This entity has no ID.";
  static successMessageNoData = "No data.";
  static errorMessageValueIsNotAnInteger = "This value is not an integer.";
}
