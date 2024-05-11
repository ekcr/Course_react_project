import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'course',
  initialState: {
    name: '',
    cost: 0 ,
    description: '' ,
  },
  reducers: {

  },
});

export const formReducer = formSlice.reducer;