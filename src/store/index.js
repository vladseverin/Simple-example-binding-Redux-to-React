import { createStore } from 'redux';
import counter from '../reducers/index';
import { increment, decrement } from '../actions/index';

export const store = createStore(counter);

store.subscribe(() =>
  console.log(store.getState())
)

window.store = store;
window.increment = increment;
window.decrement = decrement;