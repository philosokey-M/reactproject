import React from 'react'
import './App.css'
import SubItem1 from './components/SubItem1'
import SubItem2 from './components/SubItem2'
import { useState } from 'react'

const App1 = () => {
    const [text, setText]= useState('SubItem1');
    const [text2, setText2] = useState('Parents Item')
    // App.js(상위) 금고 
    const changeData=(data)=>{
        console.log('넘어온 데이터', data);
        setText2(data)
    }
  return (
    <div className='App'>
        <h1>컴포넌트끼리 값 전달을 해보자!</h1>
        <h3>1. 상위 컴포턴트에서 하위 컴포넌트로 값을 보낼때</h3>
        <input type='text' onChange={(e)=>{setText(e.target.value)}}></input>

        <SubItem1 text={text}/>
        <hr/>
        <h3>2. 하위 컴포턴트에서 하위 컴포넌트로 값을 보낼때</h3>
        <SubItem2 changeData={changeData}/>
        {text2}
    </div>
  )
}

export default App1