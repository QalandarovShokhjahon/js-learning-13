# 🧠 JavaScript Day 13 — map(), filter(), every(), some(), reduce()

Bu darsda men JavaScript’da array methodlari — map(), filter(), every(), some(), reduce() bilan ishlashni o‘rgandim.
Amaliy misollar orqali array elementlarini o‘zgartirish, saralash, tekshirish va bitta qiymatga yig‘ishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

map() methodi

map() — array’ning har bir elementini o‘zgartirib yangi array qaytaradi.
```
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


```
filter() methodi

filter() — shartga mos keladigan elementlardan yangi array yaratadi.
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

```

---

## 💻 Kod namunasi / Example code

```
const prices = [100, 200, 300];

// map
const withTax = prices.map(price => price * 1.12);

// filter
const expensive = prices.filter(price => price > 150);

// every
const allPositive = prices.every(price => price > 0);

// some
const hasCheap = prices.some(price => price < 150);

// reduce
const totalPrice = prices.reduce((sum, price) => sum + price, 0);

console.log(withTax);
console.log(expensive);
console.log(allPositive);
console.log(hasCheap);
console.log(totalPrice);

```


---

## 🧩 Qisqacha nazariya / Short Theory

- map() → elementlarni o‘zgartirib yangi array qaytaradi
- filter() → shartga mos elementlarni ajratadi
- every() → barcha elementlarni tekshiradi
- some() → kamida bittasini tekshiradi
- reduce() → array’ni bitta qiymatga yig‘adi

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da array methodlari yordamida ma’lumotlarni samarali qayta ishlashni o‘rganish.

Buning yordamida:

- Array elementlarini o‘zgartirish
- Keraksizlarini olib tashlash
- Shartlarni tekshirish
- Hisob-kitoblarni soddalashtirish
mumkin bo‘ladi.


---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 13-kun — map(), filter(), every(), some(), reduce()
