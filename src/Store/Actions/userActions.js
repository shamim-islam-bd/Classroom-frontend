import axios from 'axios';
import {
    CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
    REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS
} from "../userConstant/userConstant";




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
        // console.log('from loginAction:', data);
        
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




// Load user/ currently login user 
export const loadUserAction = () => async(dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST})

        const { data } = await axios.get('/me');
        
        console.log('from loadUserAction: ', data);

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.message
        })
    }
}




// clear errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type: CLEAR_ERRORS})
}
