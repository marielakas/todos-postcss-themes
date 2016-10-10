import { createStore } from 'redux';
import throttle  from 'lodash/throttle';
import todoApp from './reducers/rootReducer';
import { loadState, saveState } from './api/localStorage';

export const configureStore = () => {
  // pass persisted state to the reducer to init the app; if some part of the persisted state is undefined, the reducer returns the default state
  let persistedState = loadState();
  let store = createStore(todoApp, persistedState);

  // save only the todos array, so the visibility filter is the default one after page react-hot-loader
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};
