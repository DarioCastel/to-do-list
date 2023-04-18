import React from 'react'

const AddTodo = () => {
  return (
    <form>
        <input type="text"  className='input-add' name='description' placeholder='agregar tarea'/>
        <button className="btn-add" type='submit'>add</button>
    </form>
  )
}

export default AddTodo