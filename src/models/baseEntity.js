export default class BaseEntity {
  constructor(createdTime, lastUpdatedTime) {
    this.createdTime = createdTime;
    this.lastUpdatedTime = lastUpdatedTime;
  }
}
