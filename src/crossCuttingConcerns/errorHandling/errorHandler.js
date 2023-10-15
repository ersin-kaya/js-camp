export default class ErrorHandler {
  #errors;

  constructor() {
    this.#errors = [];
  }

  setError(data = undefined, message = undefined) {
    if (!(data === undefined && message === undefined)) {
      this.#errors.push({ data: data, message: message });
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
