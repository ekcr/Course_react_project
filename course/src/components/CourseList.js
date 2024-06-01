import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { deleteCourse } from '../store/slices/courseSlice';
import '../styles/courseList.css'

export default function CourseList() {
  const dispatch = useDispatch();

  const courses = useSelector((state) => {
    return state.courses.data;
  });

  const renderedCourse = courses.map((course) => {
    return(
      <div key={course.id} className='panel'>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
            className='button is-danger'
            onClick={()=>{
                dispatch(deleteCourse(course.id));
                }}
        > Delete 
        </button>
      </div>
    ); 
  });

  return (
    <div className='courselist'>{renderedCourse}</div>
  )
}
