// import student all constants
import { ADD_TO_FAVORITE_COURSE_FAIL, ADD_TO_FAVORITE_COURSE_REQUEST, ADD_TO_FAVORITE_COURSE_SUCCESS, ADD_TO_FAVORITE_TEACHER_FAIL, ADD_TO_FAVORITE_TEACHER_REQUEST, ADD_TO_FAVORITE_TEACHER_SUCCESS, DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS, GET_ALL_FAVORITE_TEACHERS_REQUEST, GET_ALL_FAVORITE_TEACHERS_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_REQUEST, GET_ALL_STUDENTS_SUCCESS, GET_SINGLE_FAVORITE_TEACHER_REQUEST, GET_SINGLE_FAVORITE_TEACHER_SUCCESS, GET_SINGLE_STUDENT_FAIL, GET_SINGLE_STUDENT_REQUEST, GET_SINGLE_STUDENT_SUCCESS, REMOVE_FROM_FAVORITE_COURSE_FAIL, REMOVE_FROM_FAVORITE_COURSE_REQUEST, REMOVE_FROM_FAVORITE_COURSE_SUCCESS, REMOVE_FROM_FAVORITE_TEACHER_FAIL, REMOVE_FROM_FAVORITE_TEACHER_REQUEST, REMOVE_FROM_FAVORITE_TEACHER_SUCCESS, UPDATE_STUDENT_PROFILE_FAIL, UPDATE_STUDENT_PROFILE_REQUEST, UPDATE_STUDENT_PROFILE_SUCCESS } from '../constants/StudentConstant';

const initialState = {
    students: [],
    student: null,
    favoriteTeachersID: [],
    favoriteTeachers: [],
    loading: true,
    error: {}
}

// create student reducer
export const StudentReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_STUDENTS_REQUEST:
        case GET_SINGLE_STUDENT_REQUEST:
        case UPDATE_STUDENT_PROFILE_REQUEST:
        case DELETE_STUDENT_REQUEST:
        case ADD_TO_FAVORITE_COURSE_REQUEST:
        case REMOVE_FROM_FAVORITE_COURSE_REQUEST:
        case ADD_TO_FAVORITE_TEACHER_REQUEST:
        case REMOVE_FROM_FAVORITE_TEACHER_REQUEST:
        case GET_ALL_FAVORITE_TEACHERS_REQUEST:
        case GET_SINGLE_FAVORITE_TEACHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                students: payload,
                loading: false
            }
        case GET_SINGLE_STUDENT_SUCCESS:
            return {
                ...state,
                student: payload,
                loading: false
            }
        case UPDATE_STUDENT_PROFILE_SUCCESS:
            return {
                ...state,
                student: payload,
                loading: false
            }
        case DELETE_STUDENT_SUCCESS:
            return {
                ...state,
                students: state.students.filter(student => student._id !== payload.id),
                loading: false
            }
        case ADD_TO_FAVORITE_COURSE_SUCCESS:
            return {
                ...state,
                student: payload,
                loading: false
            }
        case REMOVE_FROM_FAVORITE_COURSE_SUCCESS:
            return {
                ...state,
                student: payload,
                loading: false
            }


        case ADD_TO_FAVORITE_TEACHER_SUCCESS:
            return {
                ...state,
                favoriteTeachersID: payload,
                loading: false
            }
        case REMOVE_FROM_FAVORITE_TEACHER_SUCCESS:
            return {
                ...state,
                favoriteTeachers: state.favoriteTeachers.filter(teacher => teacher._id !== payload.id),
                loading: false
            }
        case GET_ALL_FAVORITE_TEACHERS_SUCCESS:
            return {
                ...state,
                favoriteTeachers: payload,
                loading: false
            }
        case GET_SINGLE_FAVORITE_TEACHER_SUCCESS:
            return {
                ...state,
                favoriteTeachers: payload,
                loading: false
            }    
            
             
        case GET_ALL_STUDENTS_FAIL:
        case GET_ALL_STUDENTS_FAIL:
        case GET_SINGLE_STUDENT_FAIL:
        case UPDATE_STUDENT_PROFILE_FAIL:
        case DELETE_STUDENT_FAIL:
        case ADD_TO_FAVORITE_COURSE_FAIL:
        case REMOVE_FROM_FAVORITE_COURSE_FAIL:
        case ADD_TO_FAVORITE_TEACHER_FAIL:
        case REMOVE_FROM_FAVORITE_TEACHER_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}