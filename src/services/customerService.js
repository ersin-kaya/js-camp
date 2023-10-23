import BusinessRules from "../utilities/business/businessRules.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";
import ErrorResult from "../utilities/results/errorResult.js";
import SuccessResult from "../utilities/results/successResult.js";
import EntityServiceBase from "./entityServiceBase.js";

export default class CustomerService extends EntityServiceBase {
  constructor(loggerService, errorHandler) {
    super(loggerService, errorHandler);
  }

  add(customer) {
    let businessRules = new BusinessRules();
    let result = businessRules.run(this.checkAge(customer.age));

    if (result === null) {
      super.add(customer);
    } else {
      this.errorHandler.setErrorWithData(
        result.success,
        result.message,
        customer
      );
    }
  }

  checkAge(age) {
    if (this.isItAnInteger(age) && age >= 18 && age <= 65) {
      return new SuccessResult();
    }
    return new ErrorResult("This value is not an age.");
  }

  checkRequiredFields(customer, requiredFields) {
    let hasErrors = false;

    if (requiredFields !== undefined) {
      for (const field of requiredFields.split(",")) {
        if (this.isThereNoData(customer[field]).success) {
          hasErrors = true;
          this.errorHandler.setErrorWithData(
            undefined,
            `Validation problem. ${field} is required.`,
            customer
          );
        }
      }
    }

    if (!hasErrors) {
      return new SuccessResult();
    }
    return new ErrorResult();
  }
}
