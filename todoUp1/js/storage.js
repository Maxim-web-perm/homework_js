const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

const setTodosFromLocalStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export { getTodosFromLocalStorage, setTodosFromLocalStorage };
