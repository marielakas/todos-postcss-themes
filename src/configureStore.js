import { createStore } from 'redux';
import todoApp from './reducers/rootReducer';
import { loadState, saveState } from './api/localStorage';

// pass persisted state to the reducer to init the app; if some part of the persisted state is undefined, the reducer returns the default state
const persistedState = loadState();

export const configureStore = () => {
  let store = createStore(todoApp, persistedState);

  // save only the todos array, so the visibility filter is the default one after page react-hot-loader
  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    });
  });

  return store;
};
