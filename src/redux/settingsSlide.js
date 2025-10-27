import { createSlice } from "@reduxjs/toolkit"

export const settingsSlice = createSlice(
    {
        name: 'settings',
        initialState: {
            allowLike: true,
            allowDislike: true,
        },
        reducers: {
            toggleAllowLike: () => {
                console.log('like')
            },
            toggleAllowDisLike: () => {
                console.log('dislike')
            },
        }
    }
)

export const { toggleAllowLike, toggleAllowDisLike } = settingsSlice.actions;
export default settingsSlice.reducer;

