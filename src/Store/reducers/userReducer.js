import {
    CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS,
    LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL,
    REGISTER_REQUEST, REGISTER_SUCCESS
} from "../constants/userConstant";

 
// get user from local storage
// const user = localStorage.getItem("user");

const initialstates = {
    isAuthenticated: false,
    // user: user ? user : null,
    user: null,
    isSuccess: false,
    error: false,
    loading: false,
    message: '',
}

export const userReducer = (state= initialstates, action)=>{
    switch (action.type ) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
               loading: true,
               isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return{
               ...state,
               loading: false,
               isAuthenticated: true,
               user: action.payload,
            };
        case LOAD_USER_FAIL:
            return{
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };    
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOAD_USER_FAIL:
            return{
               ...state,
               loading: false,
               isAuthenticated: false,
               user: null,
               error: action.payload
            };
        case CLEAR_ERRORS:
            return{
               ...state,
               error: null
            };
    
        default:
           return state;
    }
}