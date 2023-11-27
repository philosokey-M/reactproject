import React, { useState } from 'react'
import ColorList from './components/ColorList'
import ColorResult from './components/ColorResult'
import { ColorContext } from './context/ColorContext'

const App2 = () => {

    /* Context 란?
    - 리엑트 컴포넌트간에 값을 전역적으로 공유할 수 있게 해주는 기능
    
    Q. props 로만 데이터를 전달했을 때 발생하는 문제는?
    A. 깊숙히 위치한 컴포넌트에 최상위 컴포넌트 데이터를 전달해야하는 경우,
        여러 컴포넌트를 연달아 props 전달 해주어야한다.(props drilling)
        또한, 하위 -> 상위 데이터를 전달하는 과정이 불편함
        ==> 불편하기도 하고 , 실수도 잦음
        그래서 우리는 context라는 데이터 보관함을 만들어서 전역적으로 상태를 관리해 줄것!

    ** context를 사용하는 순서!
    1. context 파일을 생성해준다(createContext) => export
    2. context를 사용할 컴포넌트에 import
    3. 전역적으로 관리해줄 컴포넌트를 context. Provider로 감싸준다.
    4. 데이터를 받아올 컴포넌트에서는 "넵 저요!"<-
        useContext 함수를 이용한다.

    */

    const [myColor, setMyColor] = useState('black');
    
  return (
    <ColorContext.Provider value={{myColor, setMyColor}}>
    <div>
        
        <h1>색상변경하기</h1>
        <ColorList/>
        <hr/>
        <h1>선택한 색상</h1>
        <ColorResult/>
    </div>
    </ColorContext.Provider>
  )
}

export default App2