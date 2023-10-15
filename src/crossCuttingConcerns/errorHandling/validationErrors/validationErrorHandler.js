import ErrorHandler from "../errorHandler.js";

export default class ValidationErrorHandler extends ErrorHandler {
  constructor() {
    super();
    this.errors = [];
  }
}
