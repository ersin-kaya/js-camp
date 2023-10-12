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
