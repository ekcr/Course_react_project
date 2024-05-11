import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formsSlice";
import { courseReducer } from "./slices/courseSlice";

const store = configureStore({
    reducer: {
      form: formReducer,
      courses: courseReducer,
    },
  })

  export default store