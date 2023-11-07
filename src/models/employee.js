import BaseEntity from "./base-entity.js";

export default class Employee extends BaseEntity {
  constructor(
    id,
    createdTime,
    lastUpdatedTime,
    firstName,
    lastName,
    city,
    age,
    salary
  ) {
    super(id, createdTime, lastUpdatedTime);
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
    this.salary = salary;
  }
}
