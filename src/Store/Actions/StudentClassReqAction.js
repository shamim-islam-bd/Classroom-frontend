import axios from 'axios';
import {
    CREATE_STUDENT_CLASS_REQUEST, CREATE_STUDENT_CLASS_REQUEST_FAIL, DELETE_STUDENT_CLASS_REQUEST,
    DELETE_STUDENT_CLASS_REQUEST_FAIL, GET_ALL_STUDENT_CLASS_REQUEST, GET_ALL_STUDENT_CLASS_REQUEST_FAIL,
    GET_SINGLE_STUDENT_CLASS_REQUEST, GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL, STUDENT_CLASS_REQUEST_ERROR,
    UPDATE_STUDENT_CLASS_REQUEST, UPDATE_STUDENT_CLASS_REQUEST_FAIL
} from '../constants/StudentclassReqConstant';


// student className request Action.
export const getAllStudentclassRequest = () => async (dispatch) => {
    try {
        const res = await axios.get('/AllStudent-classrequest');
        // console.log("from Actions allstudentclassReq: ", res.data.studentClassRequest);
       
        dispatch({
            type: GET_ALL_STUDENT_CLASS_REQUEST,
            payload: res.data.studentClassRequest
        })
    }
    catch (err) {
        // console.log(err);
        dispatch({
            type: GET_ALL_STUDENT_CLASS_REQUEST_FAIL,
            payload: err.res?.data
        })
    }
}


export const getSingleStudentclassRequest = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/AllStudent-classrequest/${id}`);
        dispatch({
            type: GET_SINGLE_STUDENT_CLASS_REQUEST,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL,
            payload: err.res?.data
        })
    }
}


export const createStudentclassRequest = (values) => async (dispatch) => {
    try {
        const res = await axios.post('/student/makeclassRequest', values);
        // console.log("create Student classRequest Action: ", res.data.createclassReq);
        
        dispatch({
            type: CREATE_STUDENT_CLASS_REQUEST,
            payload: res.data?.createclassReq
        })
    }
    catch (error) {
        dispatch({
            type: CREATE_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.res?.data.message
        })
    }
}

// update student className request by status
export const updateStudentclassRequest = (id) => async (dispatch) => {
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


export const deleteStudentclassRequest = (id) => async (dispatch) => {
    try {
        // console.log("frm Action id: ", id)
       const res = await axios.delete(`/student/deleteClassRequest/${id}`);
        console.log("deleteStudentclassRequest Action: ", res.data);
        
        dispatch({
            type: DELETE_STUDENT_CLASS_REQUEST,
            payload: res.data
        })
    } catch (error) {
        console.log({mgs: error.message, stack: error.stack});
        dispatch({
            type: DELETE_STUDENT_CLASS_REQUEST_FAIL,
            payload: error.res?.data.message
        })
    }
}


export const studentclassRequestError = (error) => async (dispatch) => {
    dispatch({
        type: STUDENT_CLASS_REQUEST_ERROR,
        payload: error
    })
}

