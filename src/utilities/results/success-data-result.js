import DataResult from "./data-result.js";

export default class SuccessDataResult extends DataResult {
  constructor(message, data) {
    super(true, message, data);
  }
}
