// import student all constants
import { ADD_TO_FAVORITE_COURSE_FAIL, ADD_TO_FAVORITE_COURSE_REQUEST, ADD_TO_FAVORITE_COURSE_SUCCESS, ADD_TO_FAVORITE_TEACHER_FAIL, ADD_TO_FAVORITE_TEACHER_REQUEST, ADD_TO_FAVORITE_TEACHER_SUCCESS, DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_SINGLE_STUDENT_FAIL, GET_SINGLE_STUDENT_REQUEST, GET_SINGLE_STUDENT_SUCCESS, REMOVE_FROM_FAVORITE_COURSE_FAIL, REMOVE_FROM_FAVORITE_COURSE_REQUEST, REMOVE_FROM_FAVORITE_COURSE_SUCCESS, REMOVE_FROM_FAVORITE_TEACHER_FAIL, REMOVE_FROM_FAVORITE_TEACHER_REQUEST, REMOVE_FROM_FAVORITE_TEACHER_SUCCESS, UPDATE_STUDENT_PROFILE_FAIL, UPDATE_STUDENT_PROFILE_REQUEST, UPDATE_STUDENT_PROFILE_SUCCESS } from '../constants/StudentConstant';

const initialState = {
    students: [],
    student: null,
    loading: true,
    error: {}
}

// create student reducer
export const createStudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STUDENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                students: action.payload,
                loading: false
            }
        case GET_ALL_STUDENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 
        case GET_SINGLE_STUDENT_REQUEST:
            return { loading: true };
        case GET_SINGLE_STUDENT_SUCCESS:
            return { loading: false, student: action.payload };
        case GET_SINGLE_STUDENT_FAIL:
            
            return { loading: false, error: action.payload };
        case UPDATE_STUDENT_PROFILE_REQUEST:
            return { loading: true };
        case UPDATE_STUDENT_PROFILE_SUCCESS:
            return { loading: false, student: action.payload };
        case UPDATE_STUDENT_PROFILE_FAIL:

            return { loading: false, error: action.payload };
        case DELETE_STUDENT_REQUEST:
            return { loading: true };
        case DELETE_STUDENT_SUCCESS:
            return { loading: false, student: action.payload };
        case DELETE_STUDENT_FAIL:

            return { loading: false, error: action.payload };
        case ADD_TO_FAVORITE_TEACHER_REQUEST:
            return { loading: true };
        case ADD_TO_FAVORITE_TEACHER_SUCCESS:
            return { loading: false, student: action.payload };
        case ADD_TO_FAVORITE_TEACHER_FAIL:

            return { loading: false, error: action.payload };
        case REMOVE_FROM_FAVORITE_TEACHER_REQUEST:
            return { loading: true };
        case REMOVE_FROM_FAVORITE_TEACHER_SUCCESS:
            return { loading: false, student: action.payload };
        case REMOVE_FROM_FAVORITE_TEACHER_FAIL:
            return { loading: false, error: action.payload };

        case ADD_TO_FAVORITE_COURSE_REQUEST:
            return { loading: true };
        case ADD_TO_FAVORITE_COURSE_SUCCESS:
            return { loading: false, student: action.payload };
        case ADD_TO_FAVORITE_COURSE_FAIL:
            return { loading: false, error: action.payload };
        
        case REMOVE_FROM_FAVORITE_COURSE_REQUEST:
            return { loading: true };
        case REMOVE_FROM_FAVORITE_COURSE_SUCCESS:
            return { loading: false, student: action.payload };
        case REMOVE_FROM_FAVORITE_COURSE_FAIL:
            return { loading: false, error: action.payload };
        
        default:
            return state;
    }
}
