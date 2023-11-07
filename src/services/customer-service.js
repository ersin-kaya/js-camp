import MessagesForCustomersInEnglish from "../constants/messages/messages-for-customers-in-english.js";
import BusinessRules from "../utilities/business/businessRules.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";
import ErrorResult from "../utilities/results/errorResult.js";
import SuccessDataResult from "../utilities/results/successDataResult.js";
import SuccessResult from "../utilities/results/successResult.js";
import EntityServiceBase from "./entity-service-base.js";

export default class CustomerService extends EntityServiceBase {
  constructor(loggerService, errorHandler, messages) {
    super(loggerService, errorHandler, messages);
  }

  getAll() {
    let result = super.getAll();
    return new SuccessDataResult(result.message, result.data);
  }

  add(customer, requiredFields) {
    let businessRules = new BusinessRules();
    let result = businessRules.run(
      this.checkAge(customer.age),
      this.checkRequiredFields(customer, requiredFields)
    );

    if (result === null) {
      let resultFromBaseAddMethod = super.add(customer);
      return new SuccessResult(resultFromBaseAddMethod.message);
    } else {
      this.errorHandler.setErrorWithData(
        result.success,
        result.message,
        customer
      );
      return new ErrorResult(result.message);
    }
  }

  loadData(entities, requiredFields) {
    if (entities === undefined) {
      return;
    } else {
      for (const entity of entities) {
        this.add(entity, requiredFields);
      }
    }
  }

  checkAge(age) {
    if (this.isItAnInteger(age) && age >= 18 && age <= 65) {
      return new SuccessResult();
    }
    return new ErrorResult(MessagesForCustomersInEnglish.errorMessageNotAnAge);
  }

  checkRequiredFields(customer, requiredFields) {
    let hasErrors = false;
    let message;

    if (requiredFields !== undefined) {
      for (const field of requiredFields.split(",")) {
        if (this.isThereNoData(customer[field]).success) {
          hasErrors = true;
          message = `Validation problem. ${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required.`;
        }
      }
    }

    if (!hasErrors) {
      return new SuccessDataResult();
    }
    return new ErrorDataResult(message, customer);
  }
}
