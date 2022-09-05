import {
    CREATE_STUDENT_CLASS_REQUEST, CREATE_STUDENT_CLASS_REQUEST_FAIL, DELETE_STUDENT_CLASS_REQUEST,
    DELETE_STUDENT_CLASS_REQUEST_FAIL, GET_ALL_STUDENT_CLASS_REQUEST, GET_ALL_STUDENT_CLASS_REQUEST_FAIL,
    GET_SINGLE_STUDENT_CLASS_REQUEST, GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL, STUDENT_CLASS_REQUEST_ERROR,
    UPDATE_STUDENT_CLASS_REQUEST, UPDATE_STUDENT_CLASS_REQUEST_FAIL
} from "../constants/StudentClassReqConstant";


// student class request reducer 
const initialState = {
    studentClassRequest: [],
    singleStudentClassRequest: {},
    loading: true,
    error: null
}

export const StudentClassReqReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STUDENT_CLASS_REQUEST:
            return {
                ...state,
                studentClassRequest: payload,
                loading: false
            }
        case GET_SINGLE_STUDENT_CLASS_REQUEST:
            return {
                ...state,
                singleStudentClassRequest: payload,
                loading: false
            }
        case CREATE_STUDENT_CLASS_REQUEST:
            return {
                ...state,
                studentClassRequest: [...state.studentClassRequest, payload],
                loading: false
            }
        case UPDATE_STUDENT_CLASS_REQUEST:
            return {
                ...state,
                studentClassRequest: state.studentClassRequest.map((item) => item._id === payload._id ? payload : item),
                loading: false
            }
        case DELETE_STUDENT_CLASS_REQUEST:
            return {
                ...state,
                studentClassRequest: state.studentClassRequest.filter((item) => item._id !== payload),
                loading: false
            }
        case GET_ALL_STUDENT_CLASS_REQUEST_FAIL:
        case GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL:
        case CREATE_STUDENT_CLASS_REQUEST_FAIL:
        case UPDATE_STUDENT_CLASS_REQUEST_FAIL:
        case DELETE_STUDENT_CLASS_REQUEST_FAIL:
            return{
               ...state,
               loading: false,
               isAuthenticated: false,
               studentClassRequest: null,
               error: action.payload
         };
        case STUDENT_CLASS_REQUEST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}