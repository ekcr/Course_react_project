import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { searchCourse } from '../store/slices/courseSlice';
// import '../styles/courseList.css'

export default function CourseSearch() {
  const dispatch = useDispatch();

  const courses = useSelector((state) => {
    return state.courses.search;
  });

  return (
    <div>
      <h1>Courses</h1>
    </div>
  )
}
