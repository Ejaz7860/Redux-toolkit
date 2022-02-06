import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import coinReducer from '../features/counter/coinSlice'

export const store = configureStore({
  reducer: {
    counter :counterReducer,
    coinReducer
  },
});
