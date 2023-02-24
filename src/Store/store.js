import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
   FLUSH, PAUSE,
   PERSIST,
   PURGE,
   REGISTER, REHYDRATE,
   persistReducer
} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { CourseReducer, SingleCourseReducer } from './reducers/CourseReducer';
import { StudentReducer } from './reducers/StudentReducer';
// import { StudentclassReqReducer } from './reducers/StudentclassReqReducer';
import { TeacherReducer } from './reducers/TeachersReducer';
import { alertSlice } from './reducers/alertSlice';
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';

// const middleware = [thunk];

const persistConfig = {
      key: 'root',
      storage,
   }

const Reducer = combineReducers({
   login: authReducer,
   alerts: alertSlice.reducer,
})
 
const persistedReducer = persistReducer(persistConfig, Reducer);


export const store = configureStore({
      reducer:{
         auth: persistedReducer,
         users: usersReducer,
         teachers: TeacherReducer,
         students: StudentReducer,
         allCourse : CourseReducer,
         CourseDetails: SingleCourseReducer,
         // classReqByStudent: StudentclassReqReducer,
         devTools: process.env.NODE_ENV !== 'production',
         middleware: [thunk]
      },
      middleware: getDefaultMiddleware({
         serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
       }),
   })


