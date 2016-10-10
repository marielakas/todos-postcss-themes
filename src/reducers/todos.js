import todosActionTypes from '../actionTypes/todosActionTypes';

const todo = (state, action) => {
  switch (action.type) {
    case todosActionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case todosActionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case todosActionTypes.ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case todosActionTypes.TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
