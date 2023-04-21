import React from 'react'
import { useForm } from '../hooks/useForm'

const AddTodo = ({handlerNewTodo}) => {
  const {
    description,
    inputChange,
    resetForm,}=useForm({description:""})
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(description.length<=1)return
    let data={
      id:new Date().getTime(),
      description:description,
      done:false
    }
    handlerNewTodo(data)
    resetForm()
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"  
        className='input-add' 
        name='description' 
        placeholder='agregar tarea' 
        value={description}
        onChange={inputChange}/>
        <button className="btn-add" type='submit'>add</button>
    </form>
  )
}

export default AddTodo