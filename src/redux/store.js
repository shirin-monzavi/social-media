import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settingsSlide'

export const store = configureStore({
    reducer: { settingsReducer },
});

console.log('store',settingsReducer)