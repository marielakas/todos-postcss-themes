import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions';
import addTodoStyles from '../themes/addTodo.css';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className={addTodoStyles.addTodoContainer}>
      <input className={addTodoStyles.input} placeholder='Enter todo text...' type='text' ref={ node => { input = node; }} />
      <div className={addTodoStyles.button} onClick={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>Add todo</div>
    </div>
  )
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
