import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        loading: false,
    },
    reducers: {
        setAlert: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
          state.loading = false;
        }
    }
});

export const {setAlert, setLoading, hideLoading} = alertSlice.actions;
