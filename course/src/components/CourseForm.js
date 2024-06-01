import React from 'react'
import '../styles/courseForm.css'
import { useSelector , useDispatch} from 'react-redux';
import {changeName,changeCost,changeDescription} from '../store/slices/formsSlice';
import { addCourse } from '../store/slices/courseSlice';

export default function CourseForm() {
  const dispatch = useDispatch();

  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({name, description, cost}));
  };

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-4">Add Course</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input is-expanded"
                onChange={(event) =>{
                  dispatch(changeName(event.target.value))
                }} 
                type="text"
                value={name}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Descriptipn</label>
            <div className="control">
              <textarea
                className="input is-expanded"
                onChange={(event) =>{
                  dispatch(changeDescription(event.target.value))
                }}
                type="textarea"
                value={description}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input 
                className="input is-expanded"
                onChange={(event) =>{
                  dispatch(changeCost(event.target.value))
                }}
                type="number"
                value={cost}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Add</button>
        </div>
      </form>
    </div>
  )
}
