import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todosActions';
import TodoList from '../components/TodoList';
import constants from '../helpers/constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.SHOW_ALL:
      return todos;
    case constants.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case constants.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
