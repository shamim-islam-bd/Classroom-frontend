import { createSlice } from "@reduxjs/toolkit";


//get user from local storage
const user = localStorage.getItem("user");

const initialstate = {
    isAuthenticated: false,
    user: user ? user : null,
    isSuccess: false,
    error: false,
    loading: false,
    message: '',
  }


export const userSlice = createSlice({
    name: 'user',
    initialState: initialstate,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
            state.isSuccess = true;
            state.message = 'Login Success';
        },
        loginFail: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isSuccess = false;
            state.loading = false;
            state.message = action.payload;
        },
        registerSuccess: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isSuccess = true;
            state.loading = false;
            state.message = 'Register Success';
        },
        registerFail: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isSuccess = false;
            state.loading = false;
            state.message = action.payload;
        },
        loadUserSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.isSuccess = true;
            state.loading = false;
            state.message = 'Load User Success';
        },
        loadUserFail: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isSuccess = false;
            state.loading = false;
            state.message = action.payload;
        },
        reset: (state) => { //will reset state after login or register
            state.isAuthenticated = false;
            state.user = null;
            state.isSuccess = false;
            state.loading = false;
            state.message = '';
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isSuccess = false;
            state.loading = false;
            state.message = 'Logout Success';
        },
        clearErrors: (state) => {
            state.error = false;
            state.message = '';
        }
    }
});

export const { loginSuccess, loginFail, registerSuccess, registerFail, loadUserSuccess, loadUserFail, clearErrors } = userSlice.actions;

// export default userSlice.reducer;

