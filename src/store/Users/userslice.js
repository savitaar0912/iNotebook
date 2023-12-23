// userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  userName: '',
  password: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData: (state, action) => {
      return [...state, action.payload];
    },
    // Add more reducer functions if needed
  },
});

export const { addData } = userSlice.actions;
export default userSlice.reducer;
