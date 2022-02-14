import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        announcements: [],
        articles: [],
    },
    reducers: {
        setNews(state, action){
            return action.payload;
        },
    },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
