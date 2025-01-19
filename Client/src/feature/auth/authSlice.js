import { createSlice } from "@reduxjs/toolkit";
import { setUserEmail, setUserPassword } from "../user/userSlice";

const initialState = {
    authDetails: JSON.parse(localStorage.getItem("authDetails")) || [],
    isAuthenticated: false,
    registerationStatus: 'idle',
    errorMessage: "",
    successMessage: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:
    {
        registerUser: (state,action) => {
            const {email, password} = action.payload;
            const emailExists = state.authDetails.some((detail) => detail.email === email);
            if(emailExists){
                state.errorMessage = "Email already exists";
                state.registerationStatus = "failed";
                return;
            }
            const updatedAuthDetails = [...state.authDetails, {email, password}];
            localStorage.setItem("authDetails", JSON.stringify(updatedAuthDetails));
            state.authDetails = updatedAuthDetails;
            state.successMessage = "Registration Successful";
            state.registerationStatus = "success";
            localStorage.setItem("currentUser", JSON.stringify({email, password}));
            setUserEmail(email);
            setUserPassword(password);
        },

        loginUser: (state,action) => {
            const {email, password} = action.payload;
            const user = state.authDetails.find((detail) => detail.email === email);
            if(!user){
                state.errorMessage = "User not found";
                return;
            }
            if(user.password !== password){
                state.errorMessage = "Incorrect password";
                return;
            }
            state.successMessage = "Login Successful";
            state.isAuthenticated = true;
            setUserEmail(email);
            setUserPassword(password);
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        },
        clearMessages: (state) => {
            state.errorMessage = "";
            state.successMessage = "";
            state.registerationStatus = "idle";
        },
    }
});

export const { registerUser, setErrorMessage, setSuccessMessage, clearMessages, loginUser } = authSlice.actions;
export default authSlice.reducer;