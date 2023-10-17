import EntityServiceBase from "./entityServiceBase.js";

export default class CustomerService extends EntityServiceBase {
  constructor(loggerService, errorHandler) {
    super(loggerService, errorHandler);
  }
}
