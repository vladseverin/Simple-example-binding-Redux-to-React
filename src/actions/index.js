import { INCREMENT, DECREMENT } from '../constants/index';

export const increment = () => ({
    type: INCREMENT
  });

export const decrement = () => ({
    type: DECREMENT
});