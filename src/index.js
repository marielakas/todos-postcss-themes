import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/rootReducer';
import App from './components/App';
import { configureStore } from './configureStore';



// pass persisted state to the reducer to init the app; if some part of the persisted state is undefined, the reducer returns the default state
const persistedState = {

};

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
