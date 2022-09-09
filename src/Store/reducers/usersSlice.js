// users slice
import { createSlice } from "@reduxjs/toolkit";

// usersSlice Reducer
export const usersSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        length: 0,
    },
    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
        },
        usersReceived: (users, action) => {
            users.list = action.payload;
            users.loading = false;
            users.length = action.payload.length;
        },

        usersRequestFailed: (users, action) => {
            users.loading = false;
        }
    }
});

export const { usersRequested, usersReceived, usersRequestFailed } = usersSlice.actions;
