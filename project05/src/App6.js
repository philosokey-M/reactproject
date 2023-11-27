import React, { useRef, useState } from 'react'
import List from './components/List'
import AddTodo from './components/AddTodo'
import { TodoContext } from './context/TodoContext'

const App6 = () => {
  /*
    TodoList

    (1) Component 구성
        List -> 해야할일 목록 컴포넌트
        AddTodo -> 새로운일 추가 컴포넌트
    (2) Context 생성 -> TodoContext
    (3) 해야할 일 state 생성 => todos
        배열 형태, 배-+열 한칸 구성 -> 할일 텍스트 + 완료여부
        [{text : '결석하지 않기', completed : false}]
    (4) 새로운 일 state 생성 => newTodo
    (5) AddTodo에 새로운 일 입력 후 버튼 클릭 시
    newTodo에 값을 추가
    => handleNewTodo
    (6) 기존 todos 배열 형태에 newTodo 값을 누적
    => handleTodoAdd
    ** const[list, setList] : useState(['김드보라', '김지홍'])
    setList([...List, '양세형'])
    (7) 완료한 일을 체크하는 함수 생성
     => handleTodoToggle
    */
   
   const [todos, setTodos] = useState([
       {text : '잠자기', completed : false},
       {text : '밥먹기', completed : false}
    ])
    const [newTodo,setNewTodo] = useState("");
    const textRef = useRef();
    
    // newTodo에 값을 추가하는 함수
    const handleNewTodo=(e)=>{
        //console.log('handleNewTodo');
        console.log(e.target.value);
        setNewTodo(e.target.value);
    }

    // todos에 새로운 값을 추가하는 함수
    const handleTodoAdd=()=>{
      //  console.log('handleTodoAdd');
        // console.log(newTodo);
        setTodos([...todos,{text:newTodo, complete :false}])
        setNewTodo("")
        // input 포커스 설정
        textRef.current.focus()
    }
    // 완료한 일 체크하는 함수
    const handleTodoToggle =(index)=>{
        console.log('handleTodoToggle');
        const newTodos = [...todos]
        //console.log(newTodos);
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }
    // 열을 삭제하는 함수 < 숙제 !!!>
    const handleTodoDelete=(index)=>{
        console.log('handleTodoDelete');
        todos.splice(index,1);
    //  setTodos([...todos],{text:newTodo, complete :false}) ->이렇게 하면 텍스트가 없는 리스트가 생성됨
        setTodos([...todos])
    
    //**V 선생님 ver.
    //    const newTodos = [...todos] 
    //    newTodos.splice(index,1);
    //    setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            todos, setTodos , handleNewTodo, handleTodoAdd,
            newTodo, setNewTodo, textRef,handleTodoToggle , handleTodoDelete
             }} >
    
    <div>

        <h1>Todo List</h1>
        <AddTodo/>
        <List/>
    </div>
        </TodoContext.Provider>
  )
}

export default App6