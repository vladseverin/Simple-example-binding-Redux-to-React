import { createStore } from 'redux';
import counter from '../reducers/index';
import { increment, decrement } from '../actions/index';
import { loadState, saveState } from '../utils/localStorage';

const persistState = loadState();

export const store = createStore(counter, persistState);

store.subscribe(() => {
  const getState = store.getState();
  saveState(getState);
  console.log(getState);
});

window.store = store;
window.increment = increment;
window.decrement = decrement;