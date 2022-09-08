import axios from 'axios';
import {
    CREATE_STUDENT_CLASS_REQUEST, CREATE_STUDENT_CLASS_REQUEST_FAIL, DELETE_STUDENT_CLASS_REQUEST, DELETE_STUDENT_CLASS_REQUEST_FAIL, GET_ALL_STUDENT_CLASS_REQUEST, GET_ALL_STUDENT_CLASS_REQUEST_FAIL, GET_SINGLE_STUDENT_CLASS_REQUEST, GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL, STUDENT_CLASS_REQUEST_ERROR, UPDATE_STUDENT_CLASS_REQUEST, UPDATE_STUDENT_CLASS_REQUEST_FAIL
} from '../constants/StudentClassReqConstant';


// student class request Action 
export const getAllStudentClassRequest = () => async (dispatch) => {
    try {
        const res = await axios.get('/students-Class-Request');
        console.log("from Actions allstudentClassReq: ", res.data.studentClassRequest);

        dispatch({
            type: GET_ALL_STUDENT_CLASS_REQUEST,
            payload: res.data.studentClassRequest,
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: GET_ALL_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.res?.data?.message
        })
    }
}


export const getSingleStudentClassRequest = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/students-Class-Request/${id}`);
        dispatch({
            type: GET_SINGLE_STUDENT_CLASS_REQUEST,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.response.data.message
        })
    }
}


export const createStudentClassRequest = (values) => async (dispatch) => {
    try {
        const res = await axios.post('/student/makeclassRequest', values);
        // console.log("createStudentClassRequest Action: ", res.data.createClassReq);

        dispatch({
            type: CREATE_STUDENT_CLASS_REQUEST,
            payload: res?.data?.createClassReq,
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: CREATE_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.res?.data.message
        })
    }
}


// update student class request by status
export const updateStudentClassRequest = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/student/classRequest/${id}`);
        console.log("update Status From Redux Action :" , res.data);

        dispatch({
            type: UPDATE_STUDENT_CLASS_REQUEST,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.response.data.message
        })
    }
}


export const deleteStudentClassRequest = (id) => async (dispatch) => {
    try {
       const res = await axios.delete(`/student/deleteClassRequest/${id}`);
        // console.log("deleteStudentClassRequest Action: ", res.data);
        
        dispatch({
            type: DELETE_STUDENT_CLASS_REQUEST,
            payload: id
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: DELETE_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.res?.data.message
        })
    }
}


export const studentClassRequestError = (error) => async (dispatch) => {
    dispatch({
        type: STUDENT_CLASS_REQUEST_ERROR,
        payload: error
    })
}

