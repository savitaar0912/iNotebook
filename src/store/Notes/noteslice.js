// noteReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  notes: [
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
      "_id": "652444ea4df82ab87d0f28909",
      "user": "651dc77c988e3489d05d2935",
      "title": "second Note",
      "description": "This is the second note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447d42c9f335020d030f13",
      "user": "651dc77c988e3489d05d2935",
      "title": "Third Note",
      "description": "This is the Third note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447ea2c9f335020d030f16",
      "user": "651dc77c988e3489d05d2935",
      "title": "The Note",
      "description": "This is the note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652444ea4df82b87d0f28d909",
      "user": "651dc77c988e3489d05d2935",
      "title": "second Note",
      "description": "This is the second note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
    {
      "_id": "652447d42c9f33502g0030f13",
      "user": "651dc77c988e3489d05d2935",
      "title": "Third Note",
      "description": "This is the Third note for Savitaar",
      "tag": "urgent",
      "__v": 0
    },
  ],
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {

    // ADD Note
    addNote: (state, action) => {
      console.log(`Adding new note`)
      state.notes = [...state.notes, action.payload]
    },

    // Update
    updateNote: (state, action) => {
      console.log(`Updating existing note with id ${action.payload} `)
      // state.notes = [...state.notes, action.payload]
    },

    //Delete
    deleteNote: (state, action) => {

      const noteIndex = state.notes.findIndex(notes => notes._id === action.payload._id);
      
      if (noteIndex !== -1) {
        // note found, remove it from the notes array
        state.notes = state.notes.filter((index) => index !== noteIndex);
        console.log(`Deleted note with ${action.payload._id} `)
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export const selectNote = (state) => state.note.notes;
export default noteSlice.reducer;
