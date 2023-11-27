import React, {useState} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Header = () => {
    const {isDark} = useContext(ThemeContext)
 /*
    (3) Context 사용 - 데이터 꺼내기
    const {isDark} -> 사용할 데이터 작성하기
    useContext(ThemeContext) -> context사용할게(사용할context이름) */
    return (

  
    <div style={{
           /*
    isDark -> T
    backgroundcolor : 'black',
    color : 'white'
    
    isDark -> F
    backgroundcolor : 'skyblue',
    color : 'black'
    */
    
    backgroundColor : isDark? 'black': 'skyblue',
    color : isDark? 'white': 'black'
    }}>
        <h2>바람불어와~ 내맘에 흔들면~</h2>
    </div>
  )
}

export default Header