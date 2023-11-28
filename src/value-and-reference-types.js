// value(primitive) and reference types

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };

product2 = product3; // product2'nin referansı = product3'ün referansı
product2.productName = "Karpuz";
console.log(product3.productName); // output: Karpuz

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2; // sayi1'in değeri = sayi2'nin değeri
sayi2 = 100;
console.log(sayi1); // output: 20

console.clear();

// value type
function test(sayi) {
  console.log(sayi);
  sayi = 11;
}

let sayi = 10;
test(sayi);
console.log(sayi);

// reference type
function addToCart(products) {
  console.log(products);
  products[0].productName = "reference type";
}

let products = [
  { productName: "Elma", unitPrice: 2, quantity: 5 },
  { productName: "Armut", unitPrice: 2, quantity: 5 },
  { productName: "Karpuz", unitPrice: 2, quantity: 5 },
];

addToCart(products);
console.log(products);
