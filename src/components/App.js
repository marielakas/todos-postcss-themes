import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Themer from '../containers/Themer';
import form from '../themes/form.css';

const App = () => (
  <div>
    <Themer />
    <div className={form.formContainer}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default App;
