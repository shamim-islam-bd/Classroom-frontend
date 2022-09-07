import axios from 'axios';
// import { id } from 'useParams';

// create redux course action 
import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CLEAR_ERRORS } from "../constants/CourseConstant.js";


// Geting All Courses
export const getAllCourses = () => {
    return async (dispatch) => {
        try{
            dispatch({ type: ALL_COURSE_REQUEST });
            const {data}  = await axios.get('http://localhost:5000/allcourses');
            // console.log('course actions', data.courses );

             dispatch({
                type: ALL_COURSE_SUCCESS,
                payload: data.courses,                
            })
        }catch(err){
             dispatch({
            type: ALL_COURSE_FAIL,
            payload: err.message,
        }) 
        }
    }
}

// get single course details Action
export const getSingleCourse = (id) => {
    return async (dispatch) => {
        try{
            dispatch({ type: SINGLE_COURSE_DETAILS_REQUEST });
            const {data}  = await axios.get(`http://localhost:5000/course/${id}`);
            console.log('course actions', data);

             dispatch({
                type: SINGLE_COURSE_DETAILS_SUCCESS,
                payload: data,
            })
        }catch(err){
                dispatch({
            type: SINGLE_COURSE_DETAILS_FAIL,
            payload: err.message,
        })}
    }
}

                

// clear errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type: CLEAR_ERRORS})
}
