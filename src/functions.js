function addToCart(productName = "Elma", quantity) {
  console.log(`Sepete eklendi : ${productName} (${quantity} adet)`);
}

// addToCart();
// addToCart("Yumurta", 10);
addToCart(undefined, 10);
// addToCart(15);

//

let sayHi = () => {
  console.log("Hi!");
};

sayHi();

//

let sayHi2 = function () {
  console.log("Hi2!");
};

sayHi2();

//

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

//

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }; // encapsulation

function addToCart3(product) {
  console.log(`Ürün: ${product.productName}`);
  console.log(`Fiyat: ${product.unitPrice}`);
  console.log(`Adet: ${product.quantity}`);
}

addToCart3(product1);

//

console.clear();

function addToCart4(products) {
  console.log(products);
}

let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

addToCart4(products);

// Rest parameter (...numbers)
function add(birSey, ...numbers) {
  // birden fazla parametre varsa daima en sona yazılmalı // A rest parameter must be last in a parameter list.
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
  // console.log(birSey);
}

add(20, 30);
add(20, 30, 40);
add(20, 30, 40, 50);

// Spread operator
console.clear();

let numbers = [30, 10, 500, 600, 120];
console.log(numbers);
console.log(...numbers);
// console.log(Math.max(numbers)); // output: NaN
console.log(Math.max(...numbers));

// Destructuring assignment (!)
// bir array veya objedeki alanları farklı farklı değişkenlere atarak, değişkenler üzerinden erişim sağlama/kullanma yöntemi
// let regions = ["İç Anadolu", "Marmara", "Karadeniz"];

// -array
let [
  icAnadolu,
  marmara,
  karadeniz,
  [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri],
] = [
  { name: "İç Anadolu", population: "10M" },
  { name: "Marmara", population: "35M" },
  { name: "Karadeniz", population: "15M" },
  [
    ["Konya", "Ankara"],
    ["İstanbul", "Bursa"],
    ["Trabzon", "Rize"],
  ],
];

console.log(icAnadolu.name);

console.log(marmaraSehirleri);

// -object
console.clear();

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = { productName: "Elma", unitPrice: 10, quantity: 5 });
// () içerisinde yazmamızın sebebi: {} var ancak block scope oluşturmak için değil

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);
