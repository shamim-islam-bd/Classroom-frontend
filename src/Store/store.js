import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { alertSlice } from './reducers/alertSlice';
import { CourseReducer, SingleCourseReducer } from './reducers/CourseReducer';
import { StudentClassReqReducer } from './reducers/StudentClassReqReducer';
// import { userSlice } from './reducers/userSlice';
import { userReducer } from './reducers/userReducer';

// const middleware = [thunk];

const persistConfig = {
      key: 'root',
      storage,
   }

const Reducer = combineReducers({
   user: userReducer,
   alerts: alertSlice.reducer,
})
 
const persistedReducer = persistReducer(persistConfig, Reducer)

export const store = configureStore({
      reducer:{
         user: persistedReducer,
         ClassReqByStudent: StudentClassReqReducer,
         allCourse : CourseReducer,
         CourseDetails: SingleCourseReducer,
         devTools: process.env.NODE_ENV !== 'production',
         middleware: [thunk]
      }
  })



// export const store = createStore(
//    persistedReducer,
//    composeWithDevTools(applyMiddleware(...middleware))
//  );
