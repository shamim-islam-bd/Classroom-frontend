// import teacher constants
import {
    CREATE_TEACHER,
    CREATE_TEACHER_FAIL,
    DELETE_TEACHER,
    DELETE_TEACHER_FAIL, GET_ALL_TEACHERS, GET_ALL_TEACHERS_FAIL,
    GET_SINGLE_TEACHER,
    TEACHER_ERROR,
    UPDATE_TEACHER,
    UPDATE_TEACHER_FAIL
} from "../constants/TeachersConstant";


const initialState = {
    teachers: [],
    teacher: null,
    loading: true,
    error: {}
}

export const TeacherReducer = (state = initialState, action)=> {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_TEACHERS:
            return {
                ...state,
                teachers: payload,
                loading: false
            }
        case GET_ALL_TEACHERS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case GET_SINGLE_TEACHER:
            return {
                ...state,
                teacher: payload,
                loading: false
            }
        case CREATE_TEACHER:
            return {
                ...state,
                teachers: [...state.teachers, payload],
                loading: false
            }
        case CREATE_TEACHER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case UPDATE_TEACHER:
            return {
                ...state,
                teachers: state.teachers.map(teacher => teacher._id === payload._id ? payload : teacher),
                loading: false
            }
        case UPDATE_TEACHER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case DELETE_TEACHER:
            return {
                ...state,
                teachers: state.teachers.filter(teacher => teacher._id !== payload),
                loading: false
            }
        case DELETE_TEACHER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case TEACHER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}


