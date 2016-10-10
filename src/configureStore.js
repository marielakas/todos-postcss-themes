import { createStore } from 'redux';
import todoApp from './reducers/rootReducer';
import { loadState } from './api/localStorage';

// pass persisted state to the reducer to init the app; if some part of the persisted state is undefined, the reducer returns the default state
const persistedState = loadState();

export const configureStore = () => {
  return createStore(todoApp, persistedState);
}
