// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users[users.length] = { name: "Ann", age: 19, isAdmin: false };
users.push({ name: "Jack", age: 43, isAdmin: true });

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(array) {
  let totalAge = 0;

  users.forEach(element => (totalAge += element.age));

  return totalAge / array.length;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(arr) {
  const UsersAdins = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isAdmin === true) {
      UsersAdins.push(arr[i]);
    }
  }
  return UsersAdins;
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const first = (arr, n) => {
  let result = [];
  if (n === 0) {
    return result;
  } else if (n === undefined) {
    result.push(arr[0]);
    return result;
  } else {
    arr.forEach((item, index) => {
      if (index < n) {
        result.push(arr[index]);
      }
    });
  }

  return result;
};
console.log(first(users, 4));
