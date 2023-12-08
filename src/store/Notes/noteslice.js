// noteReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes : [
    {
      "_id": "652444ea4df82b87d0f28909",
      "user": "651dc77c988e3489d05d2935",
      "title": "second Note",
      "description": "This is the second note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447d42c9f335020030f13",
      "user": "651dc77c988e3489d05d2935",
      "title": "Third Note",
      "description": "This is the Third note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447ea2c9f335020030f16",
      "user": "651dc77c988e3489d05d2935",
      "title": "The Note",
      "description": "This is the note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652444ea4df82b87d0f28909",
      "user": "651dc77c988e3489d05d2935",
      "title": "second Note",
      "description": "This is the second note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447d42c9f335020030f13",
      "user": "651dc77c988e3489d05d2935",
      "title": "Third Note",
      "description": "This is the Third note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447ea2c9f335020030f16",
      "user": "651dc77c988e3489d05d2935",
      "title": "The Note",
      "description": "This is the note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652444ea4df82b87d0f28909",
      "user": "651dc77c988e3489d05d2935",
      "title": "second Note",
      "description": "This is the second note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447d42c9f335020030f13",
      "user": "651dc77c988e3489d05d2935",
      "title": "Third Note",
      "description": "This is the Third note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447ea2c9f335020030f16",
      "user": "651dc77c988e3489d05d2935",
      "title": "The Note",
      "description": "This is the note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652444ea4df82b87d0f28909",
      "user": "651dc77c988e3489d05d2935",
      "title": "second Note",
      "description": "This is the second note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447d42c9f335020030f13",
      "user": "651dc77c988e3489d05d2935",
      "title": "Third Note",
      "description": "This is the Third note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447ea2c9f335020030f16",
      "user": "651dc77c988e3489d05d2935",
      "title": "The Note",
      "description": "This is the note for Savitaar",
      "tag": "urgent",
      "__v": 0
    }
  ],
  name : "Shashank"
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addData: (state, action) => {
      return [...state, action.payload];
    },
    // Add more reducer functions if needed
  },
});

export const { addData } = noteSlice.actions;
export const selectNote = (state) => state.note.notes;
export default noteSlice.reducer;
