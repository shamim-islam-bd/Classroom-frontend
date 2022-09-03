import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertSlice } from './reducers/alertSlice';
import { CourseReducer, SingleCourseReducer } from './reducers/CourseReducer';
import { userSlice } from './reducers/userSlice';
// import { userReducer } from './reducers/userReducer';
const middleware = [thunk];

let initialUserState = {
   user: {
      isAuthenticated: false,
      loading: false,
      user: {},
   },
};

const rootReducer = combineReducers({
   alerts: alertSlice.reducer,
   user: userSlice.reducer,
   allCourse : CourseReducer,
   CourseDetails: SingleCourseReducer
})

export const store = createStore(
   rootReducer,
   // initialUserState,
   composeWithDevTools(applyMiddleware(...middleware))
);
