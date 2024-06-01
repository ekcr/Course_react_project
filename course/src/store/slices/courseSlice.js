import { createSlice , nanoid} from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    search: '',
    data : []
  },
  reducers: {
    addCourse(state, action){
      state.data.push(
        {
         name: action.payload.name,
         description: action.payload.description,
         cost: action.payload.cost,
         id: nanoid(),
        });
    },

    searchCourse(state, action){
      state.search = action.payload;
    },
    
    deleteCourse(state, action){
      const updatedData = state.data.filter((course)=>{
        return course.id !== action.payload;
      })

      state.data = updatedData;
    }
  },
});

export const {addCourse, deleteCourse, searchCourse} = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
