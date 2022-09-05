import axios from 'axios';
import {
    CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
    REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS
} from "../constants/userConstant";



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
            payload: data.user,
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}


// export const loadUserAction = () => async(dispatch)=>{
//     try {
//         dispatch({type: LOAD_USER_REQUEST})
//         // const { token } = store.getState().user;
//         // console.log( 'from load user:', token);
//         const config = {
//             //  headers: { 'Set-Cookie': `${document.cookie}`},
//          }
//         const { data } = await axios.get('/user/profile', config);
//         // console.log('from loginAction:', data);
//         dispatch({
//             type: LOAD_USER_SUCCESS,
//             payload: data.user,
//         })

//     } catch (error) {
//         dispatch({
//             type: LOAD_USER_FAIL,
//             payload: error.message
//         })
//     }
// }


// clear errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type: CLEAR_ERRORS})
}



