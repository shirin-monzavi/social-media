import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts:[]
    },
    reducers: {
        likePost: (state, action) => {
            const id = action.payload;

            state.forEach((p => {
                if (id === p.id) {
                    p.like++;
                }
            }))
        },
        disLikePost: (state, action) => {
            const id = action.payload;

            state.forEach((p => {
                if (id === p.id) {
                    p.dislike++;
                }
            }))
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);

        },
        setPosts: (state, action) => {

            state.posts = action.payload;
        }
    }
});

export const { likePost, disLikePost, addPost, setPosts } = postSlice.actions;
export default postSlice.reducer;

