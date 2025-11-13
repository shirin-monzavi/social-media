import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settingsSlice';
import postsReducer from './postSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        post: postsReducer
    },
});

