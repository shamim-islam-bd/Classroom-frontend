import {
    CREATE_USER, CREATE_USER_FAIL, DELETE_USER, DELETE_USER_FAIL, GET_SINGLE_USER,
    GET_SINGLE_USER_FAIL, GET_USERS, GET_USERS_FAIL, UPDATE_USER, UPDATE_USER_FAIL,
    USER_ERROR
} from '../constants/usersConstant';
  

// users Reducers 
const initialState = {
    users: [],
    singleUser: {},
    loading: true,
    error: null
}


export const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case GET_SINGLE_USER:
            return {
                ...state,
                singleUser: payload,
                loading: false
            }
        case GET_SINGLE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, payload],
                loading: false
            }
        case CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => user._id === payload._id ? payload : user),
                loading: false
            }
        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== payload),
                loading: false
            }
        case DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

