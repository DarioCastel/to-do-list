import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,handlerUpdateTodo,handlerDeleteTodo,handlerCompleteTodo}) => {
  console.log(todos)
  return (
    <ul>
      {todos.map((el)=>(
        <TodoItem 
        key={el.id}
        el={el}
        handlerUpdateTodo={handlerUpdateTodo}
        handlerDeleteTodo={handlerDeleteTodo}
        handlerCompleteTodo={handlerCompleteTodo}/>
      ))}
        
    </ul>
  )
}

export default TodoList