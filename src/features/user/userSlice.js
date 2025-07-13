import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState = {
    user: {username: 'coding addict'},
    theme: "dracula",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('Login');
        },
        logoutUser: (state) => {
            console.log("Logout");
        },
        toggleTheme: (state) => {
            console.log("Toggle theme");
        },
    },
});

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions;

export default userSlice.reducer