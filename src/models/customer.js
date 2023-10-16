import BaseEntity from "./baseEntity.js";

export default class Customer extends BaseEntity {
  constructor(
    id,
    createdTime,
    lastUpdatedTime,
    firstName,
    lastName,
    city,
    age,
    creditCardNumber
  ) {
    super(id, createdTime, lastUpdatedTime);
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
    this.creditCardNumber = creditCardNumber;
  }
}
