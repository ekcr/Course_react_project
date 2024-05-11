import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    search: '',
  },
  reducers: {

  },
});

export const courseReducer = courseSlice.reducer;