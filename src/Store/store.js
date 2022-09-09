import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
   FLUSH, PAUSE,
   PERSIST, persistReducer, PURGE,
   REGISTER, REHYDRATE
} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { alertSlice } from './reducers/alertSlice';
import { authReducer } from './reducers/authReducer';
import { CourseReducer, SingleCourseReducer } from './reducers/CourseReducer';
import { StudentclassReqReducer } from './reducers/StudentclassReqReducer';
import { TeacherReducer } from './reducers/TeachersReducer';
import { usersSlice } from './reducers/usersSlice';

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
         users: usersSlice.reducer,
         teachers: TeacherReducer,
         classNameReqByStudent: StudentclassReqReducer,
         allCourse : CourseReducer,
         CourseDetails: SingleCourseReducer,
         devTools: process.env.NODE_ENV !== 'production',
         middleware: [thunk]
      },
      middleware: getDefaultMiddleware({
         serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
       }),
   })


