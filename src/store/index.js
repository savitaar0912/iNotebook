// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createNoteReducer from './Notes/noteslice'

const rootReducer = combineReducers({
  note: createNoteReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
