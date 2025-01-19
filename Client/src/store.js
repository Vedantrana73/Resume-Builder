import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSlice.js";
import userReducer from './feature/user/userSlice.js';

const store = configureStore({
    reducer:
    {
        auth: authReducer,
        user: userReducer,
    }
});

export default store;