import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const AddTodo = () => {
    const {handleNewTodo, handleTodoAdd, newTodo, textRef} = useContext(TodoContext);
    return (
   
    <div>
    
        <input type='text' value={newTodo} onChange={handleNewTodo} ref={textRef}/>
        <button onClick={handleTodoAdd}>추가</button>
    </div>

  )
}

export default AddTodo