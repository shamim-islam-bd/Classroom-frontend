import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertSlice } from './reducers/alertReducer';
import { CourseReducer, SingleCourseReducer } from './reducers/CourseReducer';
import { userReducer } from './reducers/userReducer';
const middleware = [thunk];

let initialstate = {};

const rootReducer = combineReducers({
   alerts: alertSlice.reducer,
   user: userReducer,
   allCourse : CourseReducer,
   CourseDetails: SingleCourseReducer
})

export const store = createStore(
   rootReducer,
   initialstate,
   composeWithDevTools(applyMiddleware(...middleware))
);
