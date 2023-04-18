import React from 'react'
import { FaEdit } from "react-icons/fa";

const TodoUpdate = () => {
  return (
    <form>
        <input type="text"  className='input-update' name='update-description' value="primera tarea"/>
        <button className="btn-edit" type='submit'><FaEdit/></button>
    </form>
  )
}

export default TodoUpdate