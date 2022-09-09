// usersSlice Action creators
export const loadUsers = () => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url: "/users",
            onStart: usersRequested.type,
            onSuccess: usersReceived.type,
            onError: usersRequestFailed.type
        })
    );
}

// usersSlice Selectors
export const getUsers = createSelector(
    state => state.entities.users,
    users => users.list
);

export const getUsersLoading = createSelector(
    state => state.entities.users,
    users => users.loading
);

export const getUsersLength = createSelector(
    state => state.entities.users,
    users => users.length
);

