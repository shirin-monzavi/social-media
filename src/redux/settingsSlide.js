import { createSlice } from "@reduxjs/toolkit"

export const settingsSlice = createSlice(
    {
        name: 'settings',
        initialState: {
            allowLike: false,
            allowDislike: false,
        },
        reducers: {
            toggleAllowLike: (state) => {
                state.allowLike = !state.allowLike;
            },
            toggleAllowDisLike: (state) => {
                state.allowDislike = !state.allowDislike;
            },
        }
    }
)

export const { toggleAllowLike, toggleAllowDisLike } = settingsSlice.actions;
export default settingsSlice.reducer;

