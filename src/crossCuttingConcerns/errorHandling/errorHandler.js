export default class ErrorHandler {
  #errors;

  constructor() {
    this.#errors = [];
  }

  setError(success = undefined, message = undefined) {
    if (
      !((success === undefined || success === true) && message === undefined)
    ) {
      this.#errors.push({ success: success, message: message });
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
      this.#errors.push({ success: success, message: message, data: data });
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
