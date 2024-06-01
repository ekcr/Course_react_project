import React from 'react'
import { useSelector} from 'react-redux'

export default function CourseTotal() {
  const TotalCourses = useSelector(({forms, courses: { search, data }}) => {
    const filteredData = data.filter((course)=>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
    let cost = 0;
    for (let course of filteredData) {
      cost += course.cost;
    }
    return cost;
  });
  return <div className='courseTotal'>
      Total Price: {TotalCourses} TL
  </div>
}