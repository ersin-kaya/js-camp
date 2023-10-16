import BaseEntity from "./baseEntity.js";

export default class Employee extends BaseEntity {
  constructor(
    createdTime,
    lastUpdatedTime,
    id,
    firstName,
    lastName,
    city,
    age,
    salary
  ) {
    super(createdTime, lastUpdatedTime);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
    this.salary = salary;
  }
}
