import React from 'react'
import '../styles/courseForm.css'
import { useSelector } from 'react-redux';

export default function CourseForm() {
 const { name, description, price } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  console.log(name);

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-4">Kurs Ekle</h4>
      <form>
        <div className='field-group'>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input is-expanded" type="text"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Descriptipn</label>
            <div className="control">
              <textarea className="input is-expanded" type="textarea"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input className="input is-expanded" type="number"/>
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
