import axios from 'axios';
import {
    CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS
} from "../userConstant/userConstant";


// login Action
export const loginAction = (userinfo) => async(dispatch)=>{
    try {
        dispatch({type: LOGIN_REQUEST})
        const config = {
            headers: { 'content-Type': 'application/json' }
        }
        const { data } = await axios.post('http://localhost:5000/user/login', {userinfo}, config);
        console.log('from loginAction: ', data);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.res.data.message
        })
    }
}



// register user 
export const registerAction = (userinfo) => async(dispatch)=>{
    try {
        dispatch({type: REGISTER_REQUEST})
        const config = {
            headers: { 'content-Type': 'multipart/from-data' }
        }
        const { data } = await axios.post('http://localhost:5000/user/register', userinfo, config);
        console.log('from registerAction: ', data);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.res.data.message
        })
    }
}




// clear errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type: CLEAR_ERRORS})
}
