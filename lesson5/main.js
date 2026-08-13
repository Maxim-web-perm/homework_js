// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  firstName: "Максим",
  lastName: "Зеров",
  age: 25,
  isStudent: true,
};

for (const key in person) {
  console.log(person[key]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

const obj = {};

console.log(isEmpty(person));
console.log(isEmpty(obj));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread
// создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Гитара",
  description: "Попрактикаваться игре на гитаре не менее часа",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const changes = {
  isCompleted: true,
  priority: "High",
};

const updatedTask = cloneAndModify(task, changes);

for (const key in updatedTask) {
  console.log(`${key}: `, updatedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
// callAllMethods(myObject);

function callAllMethods(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      console.log(obj[key]);
    }
  }
}
callAllMethods(myObject);
