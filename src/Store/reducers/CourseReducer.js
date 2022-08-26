import {
    ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, ALL_COURSE_FAIL, CLEAR_ERRORS,
    SINGLE_COURSE_DETAILS_REQUEST, SINGLE_COURSE_DETAILS_SUCCESS, SINGLE_COURSE_DETAILS_FAIL
} from "../userConstant/CourseConstant.js";


const initialstates = {
    Courses: [],
    error: {}
}

export const CourseReducer = (state = initialstates, action) => {
    switch (action.type) {
        case ALL_COURSE_REQUEST:
            return {
                loading: true,
                Courses: [],
            };
        case ALL_COURSE_SUCCESS:
            return {
                loading: false,
                Courses: action.payload,
                CoursesCount: action.payload.length,
            };
        case ALL_COURSE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return{
               error: null
            };
            default:
                return state;
    }
};


// get single course details reducer
const initialstate = {
    Course: {},
    error: {}
}

export const SingleCourseReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SINGLE_COURSE_DETAILS_REQUEST:
            return {
                loading: true,
                Course: {},
            };
        case SINGLE_COURSE_DETAILS_SUCCESS:
            return {
                loading: false,
                Course: action.payload,
            };
        case SINGLE_COURSE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return{
               error: null
            };
            default:
                return state;
    }
}