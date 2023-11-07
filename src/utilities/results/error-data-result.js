import DataResult from "./data-result.js";

export default class ErrorDataResult extends DataResult {
  constructor(message, data) {
    super(false, message, data);
  }
}
