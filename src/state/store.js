import { configureStore } from '@reduxjs/toolkit'
import computerReducer from './computerReducer'
import playerReducer from './playerReducer'

export const store = configureStore({
  reducer: {
    computer: computerReducer,
    player: playerReducer
  },
});