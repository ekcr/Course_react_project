import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { searchCourse } from '../store/slices/courseSlice';
import '../styles/courseSearch.css'

export default function CourseSearch() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => {
    return state.courses.search;
  });

  return (
    <div className='courseSearch'>
      <h3 className='title is-3'>Courses</h3>
      <div className='search field is-horizontal'>
          <label className='label'> search </label>
          <input
            className='input'
            onChange={(event) =>{
              dispatch(searchCourse(event.target.value))
            }}
            value={courses} 
          />
      </div>
    </div>
  )
}
