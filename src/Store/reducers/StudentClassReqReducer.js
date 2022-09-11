import {
  CREATE_STUDENT_CLASS_REQUEST,
  CREATE_STUDENT_CLASS_REQUEST_FAIL,
  DELETE_STUDENT_CLASS_REQUEST,
  DELETE_STUDENT_CLASS_REQUEST_FAIL,
  GET_ALL_STUDENT_CLASS_REQUEST,
  GET_ALL_STUDENT_CLASS_REQUEST_FAIL,
  GET_SINGLE_STUDENT_CLASS_REQUEST,
  GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL,
  STUDENT_CLASS_REQUEST_ERROR,
  UPDATE_STUDENT_CLASS_REQUEST,
  UPDATE_STUDENT_CLASS_REQUEST_FAIL,
} from "../constants/StudentclassReqConstant";

// student CLASS request reducer
const initialState = {
  AllStudentclassRequest: [],
  singleStudentclassRequest: {},
  loading: true,
  error: null,
};

export const StudentclassReqReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENT_CLASS_REQUEST:
      return {
        ...state,
        AllStudentclassRequest: action.payload,
        Countdoc: action.payload.length,
        loading: false,
      };
    case GET_ALL_STUDENT_CLASS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        AllStudentclassRequest: null,
        error: action.payload,
      };
    case GET_SINGLE_STUDENT_CLASS_REQUEST:
      return {
        ...state,
        singleStudentclassNameRequest: action.payload,
        loading: false,
      };
    case CREATE_STUDENT_CLASS_REQUEST:
      return {
        ...state,
        AllStudentclassRequest: [
          ...state.AllStudentclassRequest,
          action.payload,
        ],
        loading: false,
      };

    case UPDATE_STUDENT_CLASS_REQUEST:
      return {
        ...state,
        AllStudentclassRequest: state.AllStudentclassRequest.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        loading: false,
      };

    case UPDATE_STUDENT_CLASS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case DELETE_STUDENT_CLASS_REQUEST:
      return {
        ...state,
        AllStudentclassRequest: state.AllStudentclassRequest.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
      };
    case DELETE_STUDENT_CLASS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case GET_SINGLE_STUDENT_CLASS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case CREATE_STUDENT_CLASS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        AllStudentclassRequest: null,
        error: action.payload,
      };
    case STUDENT_CLASS_REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
