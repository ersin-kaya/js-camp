import ErrorDataResult from "../../utilities/results/error-data-result.js";
import ErrorResult from "../../utilities/results/error-result.js";

export default class ErrorHandler {
  #errors;

  constructor() {
    this.#errors = [];
  }

  setError(success = undefined, message = undefined) {
    if (
      !((success === undefined || success === true) && message === undefined)
    ) {
      this.#errors.push(new ErrorResult(message));
    }
  }

  setErrorWithData(success = undefined, message = undefined, data = undefined) {
    if (
      !(
        (success === undefined || success === true) &&
        message === undefined &&
        data === undefined
      )
    ) {
      this.#errors.push(new ErrorDataResult(message, data));
    }
  }

  getAllErrors() {
    return this.#errors;
  }

  getErrorsWithoutAMessage() {
    return this.#errors.filter((error) => error.message === undefined);
  }

  getErrorsWithoutAData() {
    return this.#errors.filter((error) => error.data === undefined);
  }
}
