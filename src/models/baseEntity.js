export default class BaseEntity {
  constructor(id, createdTime, lastUpdatedTime) {
    this.id = id;
    this.createdTime = createdTime;
    this.lastUpdatedTime = lastUpdatedTime;
  }
}
