// import Constants

import axios from 'axios';
import {
  CREATE_USER, CREATE_USER_FAIL, DELETE_USER, DELETE_USER_FAIL, GET_SINGLE_USER,
  GET_SINGLE_USER_FAIL, GET_USERS, GET_USERS_FAIL, UPDATE_USER, UPDATE_USER_FAIL,
  USER_ERROR
} from '../constants/usersConstant';


// users Actions
export const getAllUsers = () => async (dispatch) => { 
    try {
        const res = await axios.get('/users');
        // console.log("fnd usersAction: ", res.data.users); 

        dispatch({
            type: GET_USERS,
            payload: res.data.users
        })
    }
    catch (err) {
      console.log(err);
      
        dispatch({
            type: GET_USERS_FAIL,
            payload: err.res?.data
        })
    }
}


export const getSingleUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/users/${id}`);
        dispatch({
            type: GET_SINGLE_USER,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: GET_SINGLE_USER_FAIL,
            payload: err.res?.data
        })
    }
}


export const createUser = (values) => async (dispatch) => {
    try {
        const res = await axios.post('/users', values);
        dispatch({
            type: CREATE_USER,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: CREATE_USER_FAIL,
            payload: error.res?.data.message
        })
    }
}

export const updateUser = (id, values) => async (dispatch) => {
    try {
        const res = await axios.put(`/users/${id}`, values);
        dispatch({
            type: UPDATE_USER,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.res?.data.message
        })
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/users/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    }
    catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.res?.data.message
        })
    }
}


export const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}