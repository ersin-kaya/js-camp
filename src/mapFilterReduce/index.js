// the map() method
// ----------------

let products = [
  { id: 1, name: "Acer Laptop", unitPrice: 15000 },
  { id: 2, name: "Asus Laptop", unitPrice: 16000 },
  { id: 3, name: "HP Laptop", unitPrice: 17000 },
  { id: 4, name: "Dell Laptop", unitPrice: 18000 },
  { id: 5, name: "Casper Laptop", unitPrice: 19000 },
];

// console.log("<ul>");
// products.map((product) => console.log(`<li>${product.name}</li>`)); // single line
// console.log("</ul>");

// products.map((product) => {
//   // multi-line
//   console.log(product.id);
//   console.log(product.name);
// });

// the filter() method
// -------------------
// filtreleme sonrası 0 eleman bile olsa sonuç yeni bir array'dir -> []
// bu şundan dolayı önemli: angular, react, vue içinde state management denilen bir olay var, yani bir data değiştiğinde ekran yeniden şekillenir, ekranı yeniden render ediyoruz, render edilmesi için eğer referans tipse referansın değişmesi gerekiyor. angular'da böyle değil ama ... başka bir yerde lazım oluyor...
// filter yeni bir array oluşturuyor, yani referans değişiyor ve ekran yeniden render ediliyor, bu yüzden slice() veya splice() değil de (onlar referansı değiştirmiyor) filter() kullanıyoruz

let filteredProducts = products.filter((product) => product.unitPrice >= 17000);
console.log(filteredProducts);

// the reduce() method
// -------------------
// reduce() akümülatör görevi görüyor
// örneğin (sepetteki) tüm ürünlerin fiyatlarının toplamını göstermek istiyoruz...
// acc -> accumulator

let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(`Cart total: ${cartTotal}`);

//

let cartTotal2 = products
  .filter((p) => p.unitPrice >= 17000)
  .map((p) => {
    p.unitPrice = p.unitPrice * 1.18;
    return p;
  })
  .reduce((acc, p) => acc + p.unitPrice, 0);

console.log(cartTotal2);

// Lesson - 3
console.clear();

// SPA
// State Management
// React, Angular, Vue - bunlar değişimi daha çok referansın değişmesiyle ele alırlar... referansı değiştirmemiz çok önemli

let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 30000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 70 },
  { id: 3, productName: "Kalem", quantity: 10, unitPrice: 50 },
  { id: 4, productName: "Şarj Cihazı", quantity: 4, unitPrice: 235 },
  { id: 5, productName: "Kitap", quantity: 33, unitPrice: 100 },
  { id: 6, productName: "Pot", quantity: 10, unitPrice: 500 },
];

// map()
console.log("<ul>");
cart.map((product) => {
  console.log(
    `<li>${product.productName} : ${product.quantity * product.unitPrice}</li>`
  );
});
console.log("</ul>");

// filter()
let quantityOver5 = cart.filter(
  (product) => product.quantity > 5 && product.unitPrice >= 100
);
console.log(quantityOver5);

// reduce() accumulator
let total = cart.reduce(
  (accumulator, product) => accumulator + product.quantity * product.unitPrice,
  0
);
console.log(total);

// Value types and Reference types
// cart.push({
//   id: 7,
//   productName: "Ruhsat Kılıfı",
//   quantity: 30,
//   unitPrice: 200,
// }); // push() ile array'in bellekteki referansı değişmez!!! // Angular ve Vue push() bile yapılsa ekranı yeniliyor ancak React bunu yapmaz, bu noktada React için State Management önemli(birçok bileşeni için böyle ancak her zaman aynı durum geçerli değil)!

// function addToCart(sepet) {
//   sepet.push({
//     id: 8,
//     productName: "Test Cihazı",
//     quantity: 0,
//     unitPrice: 0,
//   });
// }

// addToCart(cart);

// console.log(cart);

// let number = 10;
// function sayiTopla(sayi) {
//   sayi += 1;
//   // console.log(sayi);
// }

// sayiTopla(number);
// console.log(number);
