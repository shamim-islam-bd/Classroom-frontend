import axios from 'axios';
import {
    CREATE_TEACHER,
    CREATE_TEACHER_FAIL,
    DELETE_TEACHER,
    DELETE_TEACHER_FAIL,
    GET_ALL_TEACHERS,
    GET_ALL_TEACHERS_FAIL,
    GET_SINGLE_TEACHER,
    TEACHER_ERROR,
    UPDATE_TEACHER,
    UPDATE_TEACHER_FAIL
} from '../constants/TeachersConstant';



// Get all teachers
export const getAllTeachers = () => async dispatch => {
    try {
        const res = await axios.get('/teachers');
        // console.log("getAllTeacher frm Action: ", res.data.teachers)

        dispatch({
            type: GET_ALL_TEACHERS,
            payload: res.data.teachers
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_TEACHERS_FAIL,
            payload: err.response.data
        })
    }
}


// Get single teacher
export const getSingleTeacher = (id) => async dispatch => {
    try {
        const res = await axios.get(`/teacher/${id}`);
        // console.log("frm Action-single teacher: ", res.data.teacher)
        
        dispatch({
            type: GET_SINGLE_TEACHER,
            payload: res.data.teacher
        })
    } catch (err) {
        console.log(err);

        dispatch({
            type: TEACHER_ERROR,
            payload: err.response.data.msg
        })
    }
}


// Create teacher
export const createTeacher = (values) => async dispatch => {
    try {
        const res = await axios.post('/teachers', values);
        dispatch({
            type: CREATE_TEACHER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CREATE_TEACHER_FAIL,
            payload: err.response.data
        })
    }
}


// Update teacher
export const updateTeacher = (id, values) => async dispatch => {
    try {
        const res = await axios.put(`/teachers/${id}`, values);
        dispatch({
            type: UPDATE_TEACHER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: UPDATE_TEACHER_FAIL,
            payload: err.response.data
        })
    }
}


// Delete teacher
export const deleteTeacher = (id) => async dispatch => {
    try {
        await axios.delete(`/teachers/${id}`);
        dispatch({
            type: DELETE_TEACHER,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: DELETE_TEACHER_FAIL,
            payload: err.response.data
        })
    }
}
