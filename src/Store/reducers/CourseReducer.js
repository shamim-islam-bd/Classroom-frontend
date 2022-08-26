import {
    ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, ALL_COURSE_FAIL, CLEAR_ERRORS,
} from "../userConstant/CourseConstant.js";


const initialstates = {
    isLoading: false,
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


