import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const ListItem = ({todos, index}) => {
/* -- 단일 요소일때 사용 --
const {todos} = useContext(TodoContext)
//ㄴ> 왜 중괄호{}쓰는거지? 왜 setTodos는 안쓰지? 
console.log(todos[0].text)
*/  
const {handleTodoToggle, handleTodoDelete} = useContext(TodoContext);
    return (
    <div>
        <label style={{
            /* 
            textDecoration 속성값에
            todos.completed가 T-> "line-through"
            todos.completed가 F-> "none" 
            */
           textDecoration : todos.completed ? 'line-through' : 'none'
        }}>
            <input type="checkbox" onChange={()=>{handleTodoToggle(index)}} />{todos.text}
        </label>
        <button onClick={()=>{handleTodoDelete(index)}}>삭제</button>

    </div>
  )
}

export default ListItem