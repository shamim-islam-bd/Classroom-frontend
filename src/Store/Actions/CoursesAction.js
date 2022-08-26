import axios from 'axios';

// create redux course action 
import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CLEAR_ERRORS } from "../userConstant/CourseConstant.js";


// Geting All Courses
export const getAllCourses = () => {
    return async (dispatch) => {
        try{
            dispatch({ type: ALL_COURSE_REQUEST });
            const {data}  = await axios.get('http://localhost:5000/allcourses');
            // console.log('course actions', data);

             dispatch({
                type: ALL_COURSE_SUCCESS,
                payload: data,
            })
        }catch(err){
             dispatch({
            type: ALL_COURSE_FAIL,
            payload: err.message,
        }) 
        }
    }
}





// clear errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type: CLEAR_ERRORS})
}
