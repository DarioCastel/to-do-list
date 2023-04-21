import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import TodoUpdate from './TodoUpdate';

const TodoItem = (el,handlerUpdateTodo,handlerDeleteTodo,handlerCompleteTodo) => {
  return (
    <li>
        <span onClick={()=>handlerCompleteTodo(el.id)}><label className={`container-done ${el.done?"active":""}`}></label></span>
        <TodoUpdate el={el} handlerUpdateTodo={handlerUpdateTodo}/>
        <button className='btn-delete' onClick={()=>handlerDeleteTodo(el.id)}><FaTrashAlt/></button>
    </li>
  )
}

export default TodoItem