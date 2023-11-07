import { users } from "../data/users.js";
import DataError from "../models/data-error.js";

export default class UserService {
  // export: dışarıdan import edilebilir
  // default: js file-based old. için ben userService.js'i import ettiğimde default olarak UserService'i import et
  //   https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export
  // You can export many variables from the same file, 'default' is used only once in the whole file 👉🏼 to let you import this default variable outside without using brackets {}

  constructor(loggerService) {
    this.customers = [];
    this.employees = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }
          break;
        case "employee":
          if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }
          break;
        default:
          this.errors.push(new DataError("Wrong user type.", user));
          break;
      }
    }
  }

  // react tarafında formik-yup kütüphaneleri bunları(validation) hallediyor
  checkCustomerValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required.`, user)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrors = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not an age.`, user)
      );
    }

    return hasErrors;
  }

  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required.`, user)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrors = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not an age.`, user)
      );
    }

    return hasErrors;
  }

  add(user) {
    switch (user.type) {
      case "customer":
        if (!this.checkCustomerValidityForErrors(user)) {
          this.customers.push(user);
        }
        break;
      case "employee":
        if (!this.checkEmployeeValidityForErrors(user)) {
          this.employees.push(user);
        }
        break;
      default:
        this.errors.push(
          new DataError("This user can not be added. Wrong user type.", user)
        );
        break;
    }
    this.loggerService.log(user);
  }

  listCustomers() {
    return this.customers;
  }

  listEmployees() {
    return this.employees;
  }

  getCustomerById(id) {
    return this.customers.find((c) => c.id === id);
  }

  getEmployeeById(id) {
    return this.employees.find((e) => e.id === id);
  }

  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        // buralar firstName yerine dinamik olsun
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
