// Lesson - 1
// ----------

// console.log("Merhaba Kodlama.io");

// // camelCasing

// let dolarBugun = 27.7;
// let dolarDun = 27.5;
// dolarDun = "27.5";

// {
//   let dolarDun = 27.6;
// }
// console.log(dolarDun);

// const euroDun = 29.2;
// // euroDun = 29.3;
// console.log(euroDun);

// Array
// let konutKredileri = [
//   "Konut Kredisi",
//   "Emlak Konut Kredisi",
//   "Kamu Konut Kredisi",
//   "Özel Konut Kredisi",
// ];

// for (let i = 0; i < konutKredileri.length; i++) {
//   console.log(konutKredileri[i]);
// }

// Assignment - 1 (Java & React - 10. Gün - JavaScript & ES6)
// --------------

// var sayi1 = 10;
// var sayi1 = "Engin Demiroğ";
// console.log(sayi1);

// you can't
// let sayi1 = 10;
// let sayi1 = "Engin Demiroğ";

// let sayi1 = 10;
// sayi1 = "Engin Demiroğ";
// let student = { id: 1, name: "Engin" };
// console.log(student);

// function save(puan = 10, student) {
//   console.log(`${student.name} - ${puan}`);
// }
// ilk parametreyi default geçmek için:
// save(undefined, student); // output: Engin - 10

// let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak", "Büşra"];
// console.log(students);

// let students2 = [
//   student,
//   { id: 2, name: "Halit" },
//   "Ankara",
//   { city: "İstanbul" },
// ];
// console.log(students2);
// ---------------------------

// Assignment - 2

// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if)

let findPrimeNumbers = (...numbers) => {
  let primeNumbers = [];
  let counter;

  for (let index = 0; index < numbers.length; index++) {
    counter = 0;
    for (let i = 1; i <= numbers[index]; i++) {
      if (numbers[index] % i === 0 && counter <= 2) {
        counter++;
      } else if (counter > 2) {
        break;
      }
    }
    if (counter === 2) {
      primeNumbers.push(numbers[index]);
    }
  }
  return primeNumbers;
};

let getNumbers = (limit) => {
  let numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  return numbers;
};

// console.log(findPrimeNumbers(...getNumbers(100)));

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

let areAmicableNumbers = (firstNumber, secondNumber) => {
  let firstNumbersDivisorsSum = getDivisors(firstNumber).reduce(
    (acc, n) => acc + n,
    0
  );
  let secondNumbersDivisorsSum = getDivisors(secondNumber).reduce(
    (acc, n) => acc + n,
    0
  );

  if (
    firstNumbersDivisorsSum - firstNumber === secondNumber &&
    secondNumbersDivisorsSum - secondNumber === firstNumber
  ) {
    console.log(
      firstNumbersDivisorsSum - firstNumber,
      secondNumbersDivisorsSum - secondNumber
    );
  }
};

let getDivisors = (number) => {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

// areAmicableNumbers(284, 220);

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

let perfectNumbers = (limit) => {
  let perfectNumbers = [];
  let sum = 0;

  getNumbers(limit).forEach((number) => {
    sum = getDivisors(number).reduce((acc, n) => acc + n, 0);

    if (sum / 2 === number) {
      perfectNumbers.push(number);
    }
    // sum = 0;
  });
  return perfectNumbers;
};

// console.log(perfectNumbers(1000));

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

console.log(findPrimeNumbers(...getNumbers(1000)));
