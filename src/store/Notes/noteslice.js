// noteReducer.js
import { createSlice } from '@reduxjs/toolkit';

// Exporting a function that accepts initial notes
export const createNoteSlice = (initialNotes) => {
  const initialState = {
    notes: initialNotes || [], // Use initialNotes if provided, otherwise an empty array
  };

  const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
      // ADD NOTE
      addNote: (state, action) => {
        // LOGIC
        console.log(`Adding new note`);
        state.notes = [...state.notes, action.payload];
      },

      // UPDATE/EDIT NOTE
      updateNote: (state, action) => {
        // LOGIC
        console.log(`Updating existing note with id ${action.payload} `, action.payload);

        const {_id, title, description} = action.payload;

        const note = state.notes.find((note) => note._id === _id);

        if (note) {
          note.title = title;
          note.description = description;
        }
      },

      //DELETE NOTE
      deleteNote: (state, action) => {
        // LOGIC
        const noteIndex = state.notes.findIndex((notes) => notes._id === action.payload._id);

        if (noteIndex !== -1) {
          // note found, remove it from the notes array
          state.notes = state.notes.filter((index) => index !== noteIndex);
          console.log(`Deleted note with ${action.payload._id} `);
        }
      },
    },
  });

  return noteSlice;
};

export const { addNote, deleteNote, updateNote } = createNoteSlice().actions;
export const selectNote = (state) => state.note.notes;
export default createNoteSlice().reducer;
