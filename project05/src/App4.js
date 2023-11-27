import React, { useRef } from 'react'
import ButtonList from './components/ButtonList'

const App4 = () => {
/* 
Ref : 특정 DOM 요소에 접근하고 싶을때
- 바닐라 JS에서는 getElement~,querySelector~ 등을 통해
특정 DOM요소에 접근!
- React 사용시 특정 DOM요소에 직접 접근해야 할때
(ex.포커싱 작업, 속성 변경)
-> useRef라는 React기능을 사용할것
*/  
const divRef = useRef();  
// 요소의 크기 조절하기
const changeSize =(size)=>{
    divRef.current.style.width = `${size}px`
    divRef.current.style.height = `${size}px`

}
const changeBox = (e)=>{
    console.log(e.target);
// e.target으로 가져온 요소의 text가 작게라면
// changeSize 함수를 실행시켜주세요~

// 작게 -> 100
    if(e.target.innerText =='작게'){
        changeSize(100)
    }else if(e.target.innerText =='원본'){
        changeSize(128)
    }else if(e.target.innerText =='크게'){
        changeSize(300)
}
}
    return (
    <div>
        <ButtonList changeBox={changeBox}/>
        <div style={{
            backgroundColor : 'hotpink',
            width :'150px',
            height : '150px'
        }}
        ref={divRef}>

        </div>
    </div>
  )
}

export default App4