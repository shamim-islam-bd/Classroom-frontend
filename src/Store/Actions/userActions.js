import axios from 'axios';
import {
    CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,
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
            // withCredentials: true,
        }
        const { data } = await axios.post('/user/login', userdata, config);
        // console.log('from loginAction:', data);

        // store user's token in local storage
        // localStorage.setItem('token', data.token)
        
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






// Shamim@gmail.com

// Load user/ currently login user 
// export const loadUserAction = () => async(dispatch) => {
//     try {

//         const rootReducer = store.getState();
//         const { token } = rootReducer.user;
//         console.log("Token from store:", rootReducer);

//         dispatch({type: LOAD_USER_REQUEST})

        // const config = {
        //     headers: { 'Set-Cookie': `${document.cookie}`},
        // }

        // const config = {
        //     headers: {
        //         Cookie: `token=${token}`,
        //     },
        //   }

        // const config = {
        //     headers: {
        //         Cookie: `token=${token}`,
        //     },
        //   }

//         const { data } = await axios.get('/profile');

//         // console.log('from loadUserAction: ', data.user);

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
