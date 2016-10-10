import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import form from '../themes/form.css';

const App = () => (
  <div className={form.formContainer}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
