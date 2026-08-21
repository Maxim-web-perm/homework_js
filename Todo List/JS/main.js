"use strict";

let todos = [];

const todosKey = {
  id: "id",
  text: "text",
  isCompleted: "isCompleted",
};

const getErr = id => console.error(`Task with ID ${id} not found!`);

const getNewTodoId = arrayTodo => {
  return (
    arrayTodo.reduce((maxId, todo) => {
      return todo[todosKey.id] > maxId ? todo[todosKey.id] : maxId;
    }, 0) + 1
  );
};

const createTodo = (arreyTodos, text) => {
  const newTodo = {
    [todosKey.id]: getNewTodoId(arreyTodos),
    [todosKey.text]: text,
    [todosKey.isCompleted]: false,
  };
  arreyTodos.push(newTodo);
  return newTodo;
};

const completeTodoById = (arrayTodos, todoId) => {
  const todo = arrayTodos.find(todo => todo[todosKey.id] === todoId);
  if (!todo) {
    getErr(todoId);
  } else {
    todo[todosKey.isCompleted] = !todo[todosKey.isCompleted];
    return arrayTodos;
  }
};

const deleteTodoById = (arrayTodos, todoId) => {
  const i = arrayTodos.findIndex(todo => todo[todosKey.id] === todoId);
  if (i === -1) {
    getErr(todoId);
  } else arrayTodos.splice(i, 1);
  return arrayTodos;
};
