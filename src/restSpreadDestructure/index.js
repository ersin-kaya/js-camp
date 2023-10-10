// Assignment - 1 (Java & React - 10. Gün - JavaScript & ES6)
// --------------

// Rest parameters (...theArgs) --> c#(params)
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

// console.log(typeof showProducts); // function
// showProducts(); //id: undefined, products: []
// showProducts(10, "Elma", "Armut", "Karpuz");

// Spread operator -i like this-
let points = [1, 2, 3, 5, 15, 66, 4, 44];
// console.log(Math.max(1, 2, 3, 5, 15, 66, 4, 44)); // output: 66
// console.log(Math.max(points)); // output: NaN
// console.log(points);
// console.log(...points);
// console.log(Math.max(...points));

// console.log(..."ABC", "D", ..."EFG", "H");

// Destructuring assignment
// array
let populations = [10000, 20000, 30000, [40000, 100000]];
let [low, medium, high, [veryHigh, maximum]] = populations;
console.log(low);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([first], number) {
  // parametrelerde [] kullanıyorsan bunu destruct edilecek olarak algılıyor
  // bana bir array gelecek ve ben array'deki değerlerin ilkini first'e atayacağım

  console.log(first);
}

// someFunction(); // error: undefined is not iterable
// aslında burada [first] kullanarak, parametrede bir array arayacağı için fonksiyonu çağırırken first değerinin geçilmesini (bir dizi verilmesini) zorunlu hale getirmiş olduk
someFunction(populations);

// object
let category = { id: 1, name: "İçecek" };
console.log(category.id);
console.log(category["name"]);

let { id, name } = category;
console.log(id);
console.log(name);
