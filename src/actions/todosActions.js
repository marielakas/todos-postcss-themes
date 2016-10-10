import todosActionTypes from '../actionTypes/todosActionTypes';
import { generateId } from '../helpers/utils';

export const addTodo = (text) => ({
  type: todosActionTypes.ADD_TODO,
  id: generateId(),
  text
});

export const toggleTodo = (id) => ({
  type: todosActionTypes.TOGGLE_TODO,
  id
});
