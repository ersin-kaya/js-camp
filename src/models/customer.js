import BaseEntity from "./baseEntity.js";

export default class Customer extends BaseEntity {
  constructor(
    createdTime,
    lastUpdatedTime,
    id,
    firstName,
    lastName,
    city,
    age,
    creditCardNumber
  ) {
    super(createdTime, lastUpdatedTime);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
    this.creditCardNumber = creditCardNumber;
  }
}
