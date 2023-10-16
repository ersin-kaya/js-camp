import BaseEntity from "./baseEntity.js";

export default class User extends BaseEntity {
  constructor(
    createdTime,
    lastUpdatedTime,
    id,
    firstName,
    lastName,
    city,
    age
  ) {
    super(createdTime, lastUpdatedTime);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
  }
}
