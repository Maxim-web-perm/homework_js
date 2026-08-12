// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

const basePrace = +prompt("Введите базовую цену товара", 0);
const discount = +prompt("Введите желаемую скидку (не больше 100)", 0);
const tax = +prompt("Введите существующий в вашей стране налоговый вычет", 0);

function calculateFinalPrice(basePrace, discount, tax) {
  const discountedPrice = basePrace - (basePrace / 100) * discount;
  const finalPrice = discountedPrice + discountedPrice * tax;
  return finalPrice;
}

console.log(calculateFinalPrice(basePrace, discount, tax));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const userName = prompt("Введите Ваше имя", "");
const pasword = +prompt("Введите Ваш пароль", 0);

function checkAccess(userName, pasword) {
  if (userName === "admin" && pasword === 123456) {
    return "Доступ разрешен";
  }
  return "Доступ запрещен";
}

console.log(checkAccess(userName, pasword));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const time = +prompt("Введите текущее время", 0);

function getTimeOfDay(time) {
  switch (true) {
    case 0 <= time && time <= 5:
      return "Ночь";
    case time <= 11:
      return "Утро";
    case time <= 17:
      return "День";
    case time <= 23:
      return "Вечер";

    default:
      return "Некорректное время";
  }
}

console.log(getTimeOfDay(time));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

const numFirst = +prompt("Введите первое число", 0);
const numSecond = +prompt("Введите второе число", 0);

function findFirstEven(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(numFirst, numSecond));

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
