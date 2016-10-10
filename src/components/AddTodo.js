import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions';
import buttonStyles from '../themes/button.css';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit" className={buttonStyles.addTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
