import BusinessRules from "../utilities/business/businessRules.js";

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
    return this.#entities;
  }

  getById(id) {
    return this.#entities.filter((entity) => entity.id === id)[0];
  }

  add(entity) {
    const businessRules = new BusinessRules();
    let result;

    result = businessRules.run(this.checkId(entity));

    if (result === null) {
      entity.createdTime = new Date();
      entity.lastUpdatedTime = new Date();
      this.#entities.push(entity);
      // this.loggerService.log(
      //   Object.getPrototypeOf(this.loggerService)["constructor"].name,
      //   entity
      // ); //message!
    } else {
      this.errorHandler.setError(entity, "This entity has no ID.");
    }
  }

  update(entity) {
    entity.lastUpdatedTime = new Date();

    let oldData = this.getById(entity.id);
    const keys = Object.keys(entity);

    for (const key of keys) {
      if (oldData[key] !== entity[key] && key !== "createdTime") {
        oldData[key] = entity[key]; // reference type
      }
    }
  }

  delete(entity) {
    const index = this.#entities.map((e) => e.id).indexOf(entity.id);
    return index !== -1 ? this.#entities.splice(index, 1) : -1;
  }

  checkId(entity) {
    return !isNaN(entity.id) ? true : false;
  }
}
