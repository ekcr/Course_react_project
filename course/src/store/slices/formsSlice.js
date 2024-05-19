import { createSlice } from '@reduxjs/toolkit';
import { addCourse } from './courseSlice';

const formSlice = createSlice({
  name: 'course',
  initialState: {
    name: '',
    cost: 0 ,
    description: '' ,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },

    changeCost(state, action) {
      state.cost = action.payload;
    },

    changeDescription(state, action) {
      state.description = action.payload;
    }
  },

  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
        state.name = '';
        state.description = '';
        state.cost = 0;
    });
  }
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost, changeDescription } = formSlice.actions;