import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { alertSlice } from './reducers/alertSlice';
import { CourseReducer, SingleCourseReducer } from './reducers/CourseReducer';
import { StudentClassReqReducer } from './reducers/StudentClassReqReducer';
// import { userSlice } from './reducers/userSlice';
import { userReducer } from './reducers/userReducer';

const middleware = [thunk];

const persistConfig = {
      key: 'root',
      storage,
   }

const rootReducer = combineReducers({
   ClassReqByStudent: StudentClassReqReducer,
   alerts: alertSlice.reducer,
   user: userReducer,
   allCourse : CourseReducer,
   CourseDetails: SingleCourseReducer
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = createStore(
   persistedReducer,
   composeWithDevTools(applyMiddleware(...middleware))
 );
