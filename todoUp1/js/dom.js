import { todos } from "./main.js";
import { todoKeys } from "./constans.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosFromLocalStorage } from "./storage.js";

// Получаем элементы .form, .input и .todos
const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
export const todosElement = document.querySelector(".todos");

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

export const renderTodos = (todos, container) => {
  container.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    container.prepend(todoElement);
  });
};

// Создаем функцию для вызова createTodo и createTodoElement
function handleCreateTodo(todos, text) {
  const newTodo = createTodo(todos, text);
  const newElement = createTodoElement(newTodo);
  setTodosFromLocalStorage(todos);
  todosElement.prepend(newElement);
}

// слушатель отпрвки
formElement.addEventListener("submit", event => {
  event.preventDefault();

  const text = inputElement.value.trim();
  if (!text) return;

  handleCreateTodo(todos, text);

  inputElement.value = "";
});

// слушатель кнопок задачи
todosElement.addEventListener("click", ({ target }) => {
  const todo = target.closest(".todo");
  if (!todo) return;

  const id = Number(todo.id);

  if (target.matches(".button-complete")) {
    completeTodoById(todos, id);
    setTodosFromLocalStorage(todos);
    todo.classList.toggle("completed");
  }

  if (target.matches(".button-delete")) {
    deleteTodoById(todos, id);
    setTodosFromLocalStorage(todos);
    todo.remove();
  }
});
