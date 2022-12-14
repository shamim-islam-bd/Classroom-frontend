import {
    CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS,
    LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL,
    REGISTER_REQUEST, REGISTER_SUCCESS
} from "../constants/authConstant";

 
// get user from local storage
// const user = localStorage.getItem("user");

const initialstates = {
    isAuthenticated: false,
    // user: user ? user : null,
    auth: null,
    isSuccess: false,
    error: false,
    loading: false,
    message: '',
}

export const authReducer = (state= initialstates, action)=>{
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
               auth: action.payload,
            };
        case LOAD_USER_FAIL:
            return{
                loading: false,
                isAuthenticated: false,
                auth: null,
                error: action.payload
            };    
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOAD_USER_FAIL:
            return{
               ...state,
               loading: false,
               isAuthenticated: false,
               auth: null,
               error: action.payload
            };
        case LOGOUT_SUCCESS:
            return{
                loading: false,
                isAuthenticated: false,
                auth: null,
                error: null
            };
        case LOGOUT_FAIL:
            return{
                ...state,
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