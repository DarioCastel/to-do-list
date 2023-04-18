import { useReducer } from "react"

export const useTodo = ()=>{
    const initialState=[]
    const init=""
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)


   const handlerNewTodo = (todo)=>{
    const action ={
        type:"addTodo",
        payload: todo,
    }
    dispatch (action)
   }
   const handlerUpdateTodo = (id,decription)=>{
    const action ={
        type:"updateTodo",
        payload: {id, description},
    }
    dispatch (action)
   }
   const handlerDeleteTodo = (id)=>{
    const action ={
        type:"deleteTodo",
        payload: id,
    }
    dispatch (action)
   }
   const handlerCompleteTodo = (id)=>{
    const action ={
        type:"completeTodo",
        payload: id,
    }
    dispatch (action)
   }
   return{
    handlerNewTodo,
    handlerUpdateTodo,
    handlerDeleteTodo,
    handlerCompleteTodo
   }
}