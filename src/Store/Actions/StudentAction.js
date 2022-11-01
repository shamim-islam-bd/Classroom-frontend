import axios from "axios";
import { ADD_TO_FAVORITE_TEACHER_FAIL, ADD_TO_FAVORITE_TEACHER_SUCCESS, GET_ALL_FAVORITE_TEACHERS_FAIL, GET_ALL_FAVORITE_TEACHERS_SUCCESS, REMOVE_FROM_FAVORITE_TEACHER_FAIL, REMOVE_FROM_FAVORITE_TEACHER_SUCCESS } from "../constants/StudentConstant";

// add to favorite teacher 
export const addToFavoriteTeacher = (id, userId) => {
   return async (dispatch) => {
    try {
        const res = await axios.put(`/student/add-favorite/${id}`, { userId })
        console.log("addFavoriteTeacher: ", res.data);

        dispatch({
            type: ADD_TO_FAVORITE_TEACHER_SUCCESS,
            payload: res.data.student
        })
    } catch (err) {
        dispatch({
            type: ADD_TO_FAVORITE_TEACHER_FAIL,
            payload: err.response.data
        })
    } 
  }
}

// remove from favorite teacher.
export const removeFavoriteTeacher = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/student/remove-favorite/${id}`);
        console.log("removeFavoriteTeacher", res.data);

        dispatch({
            type: REMOVE_FROM_FAVORITE_TEACHER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REMOVE_FROM_FAVORITE_TEACHER_FAIL,
            payload: err.response.data
        })
    }
}

// get favorite teacher.
export const AllFavoriteTeacher = (id) => async dispatch => {
    try {
        const res = await axios.get(`/student/allfavorite-teachers/${id}`);
        // console.log("AllFavoriteTeacher: ", res.data.fvtTeachers );
        dispatch({
            type: GET_ALL_FAVORITE_TEACHERS_SUCCESS,
            payload: res.data.fvtTeachers
        })
    } catch (err) {
        console.log("err: ",err);
        dispatch({
            type: GET_ALL_FAVORITE_TEACHERS_FAIL,
            payload: err.response.data
        })
    }
}