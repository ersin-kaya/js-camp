import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";
import Customer from "../models/customer.js";

console.log("User Component yüklendi");

let logger1 = new ElasticLogger();
let userService = new UserService(logger1);

// let user1 = new User(1, "Engin", "Demiroğ", "Ankara");
// let user2 = new User(2, "Baran", "Gökçekli", "Muğla");
// userService.add(user1);
// userService.add(user2);

// console.log("------------");
userService.load();

let customerToAdd = new Customer(7, "Seda", "Yılmaz", "Ankara", "26a");
// prototype
customerToAdd.type = "customer";
userService.add(customerToAdd);

// console.log(userService.customers);
// console.log(userService.employees);
console.log(userService.errors);

console.log(userService.listCustomers());
console.log(userService.listEmployees());
// console.log(userService.getCustomerById(1));
console.log("-----sorted-----");
console.log(userService.getCustomersSorted());

// let customer = { id: 1, firstName: "Engin" };
// customer.lastName = "Demiroğ"; // prototyping
// console.log(customer);
