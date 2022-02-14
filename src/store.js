import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '@Slices/newsSlice';

export default (preloadedState = {}) => configureStore({
    reducer: {
        news: newsSlice,
    },
    preloadedState,
});
