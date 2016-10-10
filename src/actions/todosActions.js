import todosActionTypes from '../actionTypes/todosActionTypes';
let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: todosActionTypes.ADD_TODO,
    id: (nextTodoId++).toString(),
    text,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: todosActionTypes.TOGGLE_TODO,
    id,
  };
};
