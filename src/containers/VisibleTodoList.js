import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todosActions';
import TodoList from '../components/TodoList';
import constants from '../helpers/constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.all:
      return todos;
    case constants.completed:
      return todos.filter(t => t.completed);
    case constants.active:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter),
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
