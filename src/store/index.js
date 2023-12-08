// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import noteReducer from './Notes/noteslice'
import userReducer from './Users/userslice'

const rootReducer = combineReducers({
  note: noteReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
