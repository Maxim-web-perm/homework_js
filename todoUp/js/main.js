"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
function createTodoElement(todo) {
  const newTodoElement = document.createElement("li");
  newTodoElement.classList.add("todo");
  newTodoElement.id = todo[todoKeys.id];
  newTodoElement.innerHTML = `
  <div class="todo-text">${todo[todoKeys.text]}</div>
  <div class="todo-actions">
    <button class="button-complete button">&#10004;</button>
    <button class="button-delete button">&#10006;</button>
  </div>`;

  return newTodoElement;
}
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
function handleCreateTodo(todos, text) {
  const newTodo = createTodo(todos, text);
  const newElement = createTodoElement(newTodo);

  todosElement.append(newElement);
}

formElement.addEventListener("submit", event => {
  event.preventDefault();

  const text = inputElement.value.trim();
  if (!text) return;

  handleCreateTodo(todos, text);

  inputElement.value = "";
});

todosElement.addEventListener("click", ({ target }) => {
  const todo = target.closest(".todo");
  if (!todo) return;

  const id = Number(todo.id);

  if (target.matches(".button-complete")) {
    completeTodoById(todos, id);
    todo.classList.toggle("completed");
  }

  if (target.matches(".button-delete")) {
    deleteTodoById(todos, id);
    todo.remove();
  }
});
