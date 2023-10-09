console.log("Merhaba Kodlama.io");

// camelCasing

let dolarBugun = 27.7;
let dolarDun = 27.5;
dolarDun = "27.5";

{
  let dolarDun = 27.6;
}
console.log(dolarDun);

const euroDun = 29.2;
// euroDun = 29.3;
console.log(euroDun);

// Array
let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
  "Özel Konut Kredisi",
];

for (let i = 0; i < konutKredileri.length; i++) {
  console.log(konutKredileri[i]);
}
