import todosActionTypes from '../actionTypes/todosActionTypes';
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: todosActionTypes.ADD_TODO,
  id: (nextTodoId++).toString(),
  text
});

export const toggleTodo = (id) => ({
  type: todosActionTypes.TOGGLE_TODO,
  id
});
