'use strict';

// map() →  arraydagi har bir elementni qayta ishlaydi va yangi array yaratadi. Har bir elementga o'zgartirish yoki qayta ishlov berish imkonini beradi.
// let sonlar = [1, 2, 3];
// let kvadrat = sonlar.map((son) => son * 2);
// console.log(kvadrat);

// ismlardagi hamma harflarni katta harfga o'zgartirish
// let ismlar = ['Shokhjahon', 'Ozodbek', 'Sardor'];
// let kattaHarf = ismlar.map((ism) => ism.toUpperCase());
// console.log(kattaHarf);

// birinchi harf katta qolganlari kichik harfga o'zgartirish
// let colors = ['red', 'green', 'blue'];
// let kattaHarf = colors.map((color) => {
//     let birinchiHarf = color.charAt(0).toUpperCase();
//     let qolganHarf = color.slice(1).toLowerCase();
//     return birinchiHarf + qolganHarf;
// })
// console.log(kattaHarf);


let obj = [
  {
    ism: "Joe",
    yosh: 23,
  },
  {
    ism: "John",
    yosh: 18,
  },
]

let yangiObjYosh = obj.map((yosh) => yosh.yosh)
console.log(yangiObjYosh)

let yangiObjIsm = obj.map((ism) => ism.ism)
console.log(yangiObjIsm)


// Vazifa
// 1.
// let sonlar = [1, 2, 3, 4, 5];
// let kvadrat = sonlar.map((son) => son * 2);
// console.log(kvadrat);

// 2.
let mevalar = ['olma', 'anor', 'banan', 'uzum'];

let kattaHarf = mevalar.map((meva) => {
  let boshharf = meva.charAt(0).toUpperCase()
  let qolganHarf = meva.slice(1).toLowerCase()
  return boshharf + qolganHarf
})
console.log(kattaHarf);


// filter() → arraydagi elementlarni tekshiradi va shartga mos keladigan elementlarni ajratib, yangi array yaratadi. Faqat shartga javob beradigan elementlar qaytariladi, qolganlari esa chiqarib tashlanadi.

//  Faqat uzunligi 4 bo‘lgan ranglarni olish
let ranglar = ['pink', 'lime', 'black'];

let fourLetter = ranglar.filter((rang) => rang.length === 4);
console.log(fourLetter);

//  Faqat juft sonlarni ajratish
// let sonlar = [1, 2, 3, 4];

// let juftSon = sonlar.filter((son) => son % 2 === 0);
// console.log(juftSon);

//  Yoshni 18 dan katta bo‘lganlarni ajratish
let shaxslar = [
  {
    ism: "Joe",
    yosh: 23,
  },
  {
    ism: "John",
    yosh: 16,
  },
]

let yosh = shaxslar.filter((shaxs) => shaxs.yosh > 18)
console.log(yosh)

// Vazifa:
// 1.
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let toqSon = sonlar.filter((son) => son % 2 !== 0 )
console.log(toqSon);

// 2.
let number = [3, 4, 5, 6, 7, 8];
let kattaSon = number.filter((num) => num >= 5);
console.log(kattaSon);


// every() → arraydagi har bir element shartni bajarishini tekshiradi.
// let yoshlar = [23, 34, 12, 18]

// let hammasiBalogatda = yoshlar.every((yosh) => yosh >= 18)
// console.log(hammasiBalogatda)
 

// some() → arraydagi hech bo‘lmaganda bitta element shartni bajarishini tekshiradi
let yoshlar = [13, 22, 15, 11];

let balogat = yoshlar.some((yosh) => yosh >= 18);
console.log(balogat);


// reduce() → array elementlarini birlashtirib bitta qiymat hosil qiladi.

const people = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Guli", age: 20 },
]

const ageSum = people.reduce((acc, person) => acc + person.age, 0)
console.log(ageSum) // 75

let numbers = [7, 12, 5, 11];

let sonYigindi = numbers.reduce((a, b) => a + b, 0);
console.log(sonYigindi);


let salom = ['S', 'a', 'l', 'o', 'm'];

let birlashtir = salom.reduce((a, b) => a + b);
console.log(birlashtir);
