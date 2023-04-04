import React from 'react'
import '../css/addForm.css'

const AddForm = () => {
  return (
    <>
    <form className="form-to-do">
        <input classname="input-to-do" type="text"
        name="descripion"
        placeholder='any new task?' />
        <button type="submit" className="btn-submit">ADD NEW TASK</button>
    </form>
    </>
  )
}

export default AddForm