import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import TodoUpdate from './TodoUpdate';

const TodoItem = () => {
  return (
    <li>
        <span><label className='container-done'></label></span>
        <TodoUpdate/>
        <button className='btn-delete'><FaTrashAlt/></button>
    </li>
  )
}

export default TodoItem