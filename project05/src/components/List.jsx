import React from 'react'
import ListItem from './ListItem'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const List = () => {
  // 이게 왜 필요하지???

  const {todos} =useContext(TodoContext)
    return (
    <div>
        {todos.map((item,index) => <ListItem todos={item} index={index} key={item.text+index}/>)}
    </div>
  )
}

export default List