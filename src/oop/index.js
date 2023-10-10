class Customer {
  // constructor pattern
  constructor(id, customerNumber) {
    // prototyping
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, "12345");
customer.name = "Murat Kurtboğan"; // prototyping (instance)
console.log(customer.name);

Customer.deneme = "Deneme"; // prototyping (class)
console.log(Customer.deneme);

console.log(customer.customerNumber);

class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}

class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}
