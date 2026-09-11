import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, todosElement } from "./dom.js";

export const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos, todosElement);
});
