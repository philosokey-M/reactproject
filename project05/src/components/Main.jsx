import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Main = () => {
  /*
  const{사용할 데이터} = useContext(context 이름);
  */

    const {isDark, setIsDark} = useContext(ThemeContext)
    const subList = [
        
        '지나간 세월에',
        '두 눈을 감아본다~',
        '우리의 믿음~'
    ]
    const [mainText, setMainText] = useState('우리의 사랑~👨🏿')
    const toggleTheme=()=>{
        /*
        버튼 클릭 시 isDark의 값이 
        T-> F, F->T로 설정해주기
         */
        setIsDark(!isDark) // 현재 값과 반대되는 값을 버튼을 누를때마다 세팅해주는 코드
        /* 
        Dark F -> 현재 기본 텍스트
        Dark T -> 바뀐 텍스트
         */
        isDark?setMainText('우리의 사랑~👨🏿'):setMainText('우리의 행복~👨‍🦳')
    }
    return (
    <div style={{
        /*
        Dark F -> 배경색 'whitesmoke', 글씨색 'black'
        Dark T -> 배경색 'black', 글씨색 'white'
        */
        backgroundColor : isDark? 'black': 'whitesmoke',
        color : isDark? 'white': 'black'
    }}>
        {subList.map(item=> <p key={item}>{item}</p>)}
        <h3>{mainText}</h3>
        <button onClick={toggleTheme}>Mode Change</button>
    </div>
  )
}

export default Main