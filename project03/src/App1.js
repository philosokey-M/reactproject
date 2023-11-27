import React, {useState} from 'react'

const App1 = () => {

    /* React Event
    - return 문안에 DOM요소에 이벤트 속성 : onClick ={함수이름}
    - 만약 함수 이름이 따로 없고 , 바로 작성하고 싶은경우?
        onClick={()=>{}}
    - DOM 요소에만 이벤트를 걸 수 있고, 내가 만든 컴포넌트에는 이벤트를 걸 수 없다.
        ex) <div onClick={}> 가능
            <MenuBox onClick={}/> 불가능
    */
    let num =0;
    const ck1 = () =>{

        console.log('현재 숫자',num)
        num+=1;
    }

    /*State
    - 컴포넌트 내부에서 관리하는 "변경이 가능한 데이터"
    - 변수와 다른점 ? state는 값 변경시 화면에 바로 렌더링이 됨
    - JS에서 값이 변하는 과정을 생각해보면, 항상 마지막에는 화면 렌더링이 들어가줘야함!

        1) import 작업
        - import {useState} from 'react';
        
        2) state 선언
        - const [변수이름, set변수이름] = useState(초기값)

        3) 사용
        - state 값 변경시 : set변수이름(변경값)

    */

    const [num2, setNum2] = useState(0)
    const ck2 = ()=>{
        setNum2(num2+1)
    }

    const ck3=()=>{
        setNum2(num2-1)
    }

  return (
    <div>
        <p>일반변수: {num}</p>
        <button onClick={ck1}>일반변수 버튼</button>
        <p>state: {num2}</p>
        <button onClick={ck2}>state + 버튼</button>
        <button onClick={ck3}>state - 버튼</button>
    </div>
  )
}

export default App1