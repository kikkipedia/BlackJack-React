import { configureStore } from '@reduxjs/toolkit'
import computerReducer from './reducers/computerReducer'
import playerReducer from './reducers/playerReducer'
import deckReducer from './reducers/deckReducer'

export const store = configureStore({
  reducer: {
    computer: computerReducer,
    player: playerReducer,
    deck: deckReducer
  },
});