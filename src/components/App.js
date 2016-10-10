import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import form from '../themes/form.css';

const App = ({ params }) => (
  <div className={form.formContainer}>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'all'} />
    <Footer />
  </div>
);

export default App;
