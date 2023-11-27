import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Ex02 = () => {
    /* 
    useEffect : 함수형 컴포넌트에서 Life Cycle 기능을
                사용할 수 있게 해주는 리엑트 Hook
    useEffect(callback, deps)
    callback -> 실행함수
    deps(dependency) -> 의존성 배열
    
    ** 배열의 형태에 따라 실행이 달라짐!
(1) 생략 : 렌더링 때마다 / didMount + didUpdate
(2) 빈배열 : 첫 랜더링 때 / didMount
(3) 변경을 확인할 값 : 값이 변할 때 : / didMount + didUpdate
    */
    const [text, setText] = useState('Hello World!');
    const [num, setNum] = useState(0);
    
    const increaseNum = () =>{
        setNum(num+1);
    }
    const changeTxt =() =>{
        setText('안뇽 리엑트');
    }
    
    //(1) 생략 
    useEffect(()=>{
        console.log('생략');
    })
    // (2) 빈 배열
    useEffect(()=>{
        console.log('빈배열');
    },[])

    // (3) 변경을 확인할 값
    useEffect(()=>{
        console.log('num 변경');
    },[num])

    useEffect(()=>{
        console.log('num 변경');
    },[num,text])
    return (
    <div>
        <p>{text}</p>
        <p>{num}</p>
        <button onClick={increaseNum}>+1</button>
        <button onClick={changeTxt}>change</button>
    </div>
  )
}

export default Ex02