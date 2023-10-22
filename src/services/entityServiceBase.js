import BusinessRules from "../utilities/business/businessRules.js";
import SuccessDataResult from "../utilities/results/successDataResult.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";
import SuccessResult from "../utilities/results/successResult.js";
import ErrorResult from "../utilities/results/errorResult.js";

export default class EntityServiceBase {
  #entities;

  constructor(loggerService, errorHandler) {
    this.#entities = [];
    this.loggerService = loggerService;
    this.errorHandler = errorHandler;
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
    return new SuccessDataResult(undefined, this.#entities);
  }

  getById(id) {
    return new SuccessDataResult(
      undefined,
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
    }
  }

  update(entity) {
    entity.lastUpdatedTime = this.getDate();

    let oldData = this.getById(entity.id).data;
    const keys = Object.keys(entity);

    for (const key of keys) {
      if (oldData[key] !== entity[key] && key !== "createdTime") {
        oldData[key] = entity[key]; // reference type
      }
    }
  }

  delete(entity) {
    const index = this.#entities.map((e) => e.id).indexOf(entity.id);

    if (index !== -1) {
      return new SuccessDataResult(
        "The record was successfully deleted.",
        this.#entities.splice(index, 1)
      );
    }
    return new ErrorDataResult("The record could not be deleted.", entity);
  }

  checkId(entity) {
    return !isNaN(entity.id)
      ? new SuccessResult()
      : new ErrorResult("This entity has no ID.");
  }

  isItAnInteger(value) {
    if (!Number.isNaN(Number.parseInt(+value))) {
      return new SuccessResult();
    }
    return new ErrorResult("This value is not an integer.");
  }

  getDate() {
    return new Date();
  }
}
