import axios from 'axios';
import {
    CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS
} from "../constants/authConstant";



// register user 
export const registerAction = (userinfo) => async(dispatch)=> {
    try {
        dispatch({type: REGISTER_REQUEST})
        const config = {
            headers: { 'Content-Type': 'multipart/from-data' }
        }
        const { data } = await axios.post('/user/register', userinfo, config );
        console.log('from registerAction: ', data.user);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.message
        })
    }
}


// login Action
export const loginAction = (userdata) => async(dispatch)=>{
    try {
        dispatch({type: LOGIN_REQUEST})
        const config = {
            headers: { 'Content-Type': 'application/json' },
        }
        const { data } = await axios.post('/user/login', userdata, config);
        // console.log('from loginAction:', data.auth);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.auth,
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}


// logout Action
export const logoutAction = () => async(dispatch)=>{
    try {
        await axios.get('/user/logout');
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.message
        })
    }
}


// load current login user
export const loadUserAction = () => async(dispatch)=>{
    try {
        const { data } = await axios.get('/user/profile');
        console.log('from loadUserAction: ', data);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}


// clear errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type: CLEAR_ERRORS})
}



