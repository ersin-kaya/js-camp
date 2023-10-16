import BaseEntity from "./baseEntity.js";

export default class User extends BaseEntity {
  constructor(
    id,
    createdTime,
    lastUpdatedTime,
    firstName,
    lastName,
    city,
    age
  ) {
    super(id, createdTime, lastUpdatedTime);
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
  }
}
