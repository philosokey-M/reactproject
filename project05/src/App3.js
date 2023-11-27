import React, { useState } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import {ThemeContext} from './context/ThemeContext'

const App3 = () => {
  /*
  화면의 Theme와 관련된 데이터 -> 전역적으로 사용, context 
  다크 모드인가요? -> isDark 라는 state 생성!

  */
 const [isDark, setIsDark] = useState(false);
  return (
    /*
    (1) -> ThemeContext.js 확인

    (2) Context 사용 - 데이터 넣기
    ThemeContext -> 리턴문 전체 부분을 사용하려는 context로 묶어주기
    Provider -> 해당하는 데이터 전달을 위한 provider 삽입하기
    value={{isDark, setIsDark}} -> 저장하고자 하는 데이터를 객체형태로 
                                   묶어서 value에 전달하기
    (3) -> Header.jsx 확인
                                   */
    <ThemeContext.Provider value={{isDark,setIsDark}}>

    <div>
      <Header/>
      <Main/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App3