import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userEmail: null,
    userPassword: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        setUserPassword: (state, action) => {
            state.userPassword = action.payload;
        }
    },
});

export const { setUserEmail, setUserPassword } = userSlice.actions;
export default userSlice.reducer;