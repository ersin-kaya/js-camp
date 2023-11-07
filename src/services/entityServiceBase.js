import BusinessRules from "../utilities/business/businessRules.js";
import SuccessDataResult from "../utilities/results/successDataResult.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";
import SuccessResult from "../utilities/results/successResult.js";
import ErrorResult from "../utilities/results/errorResult.js";
import MessageBase from "../constants/messages/message-base.js";

export default class EntityServiceBase {
  #entities;

  constructor(loggerService, errorHandler, messages) {
    this.#entities = [];
    this.loggerService = loggerService;
    this.errorHandler = errorHandler;
    this.messages = new MessageBase(messages);
  }

  loadData(entities) {
    if (entities === undefined) {
      return;
    } else {
      for (const entity of entities) {
        this.add(entity);
      }
    }
  }

  getAll() {
    return new SuccessDataResult(
      this.messages.successMessageForGetAllMethods,
      this.#entities
    );
  }

  getById(id) {
    return new SuccessDataResult(
      this.messages.successMessageForGetByIdMethods,
      this.#entities.filter((entity) => entity.id === id)[0]
    );
  }

  add(entity) {
    const businessRules = new BusinessRules();
    let result;
    result = businessRules.run(this.checkId(entity));

    if (result === null) {
      entity.createdTime = this.getDate();
      entity.lastUpdatedTime = this.getDate();
      this.#entities.push(entity);
      return new SuccessResult(this.messages.successMessageForAddMethods);
      // this.loggerService.log(
      //   Object.getPrototypeOf(this.loggerService)["constructor"].name,
      //   entity
      // ); //message!
    } else {
      this.errorHandler.setErrorWithData(
        result.success,
        result.message,
        entity
      );
      return new ErrorResult(this.messages.errorMessageForAddMethods);
    }
  }

  update(entity) {
    entity.lastUpdatedTime = this.getDate();

    let oldData = this.getById(entity.id).data;
    const keys = Object.keys(entity);

    for (const key of keys) {
      if (oldData[key] !== entity[key] && key !== "createdTime") {
        oldData[key] = entity[key]; // reference type
        return new SuccessResult(this.messages.successMessageForUpdateMethods);
      }
    }
    return new ErrorResult(this.messages.errorMessageForUpdateMethods);
  }

  delete(entity) {
    const index = this.#entities.map((e) => e.id).indexOf(entity.id);

    if (index !== -1) {
      return new SuccessDataResult(
        this.messages.successMessageForDeleteMethods,
        this.#entities.splice(index, 1)
      );
    }
    return new ErrorDataResult(
      this.messages.errorMessageForDeleteMethods,
      entity
    );
  }

  checkId(entity) {
    return !isNaN(entity.id)
      ? new SuccessResult()
      : new ErrorResult(MessageBase.errorMessageEntityHasNoId);
  }

  isThereNoData(value) {
    if (value) {
      return new ErrorResult();
    }
    return new SuccessResult(MessageBase.successMessageNoData);
  }

  isItAnInteger(value) {
    if (!Number.isNaN(Number.parseInt(+value))) {
      return new SuccessResult();
    }
    return new ErrorResult(MessageBase.errorMessageValueIsNotAnInteger);
  }

  getDate() {
    return new Date();
  }
}
