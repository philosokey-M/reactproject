import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Ex03 = () => {
 const position =['✌', '✊', '✋']
 /* 
 가위바위보 게임 만들기
 
 (1) 나의 선택, 컴퓨터의 선택, 결과 -> state 생성
    ** Hint! 가위바위보를 0~2 숫자로 설정하여 진행
 (2) 나의 선택 설정
      클릭한 버튼 안의 글자에 따라
      0,1,2로 값을 설정 -> 이벤트 객체
 (3) 컴퓨터 선택 설정
      0,1,2 랜덤 숫자 설정 -> 난수 생성
 (4) 게임 결과 판별
    useEffect를 사용하여 정확한 시점 지정
 */ 
  const [mypick, setMypick] = useState(null);
  const [compick, setCompick] = useState(null);
  const [result, setResult] = useState('무승부');

  const btnClick=(e)=>{
    //console.log(e.target.innerText);
    // 나의 선택
    if(e.target.innerText=='✌'){
      setMypick(0)
 
    }else if(e.target.innerText=='✊'){
      setMypick(1)

    }else{
      setMypick(2)
  
      
    }
    /* 선생님 ver.
    switch(e.target.innerText){
      case '✌' : setMyPick(0); break;
      case '✊' : setMyPick(1); break;
      case '✋' : setMyPick(2); break;
    }
    */

    // 컴퓨터 선택

    setCompick(parseInt(Math.random()*3))
  }

   useEffect(()=>{
     if(mypick == compick){
        setResult('무승부')
     }else if(Math.abs(mypick-compick)==1){
        if(mypick<compick){
          setResult('패배')
        }else if(mypick>compick){
          setResult('승리')
        }
     }else{
        if(mypick<compick){
          setResult('승리')
        }else{
          setResult('패배')
        }
     }

   },[mypick,compick])

  return (
    <div>
      <h1>가위바위보 게임</h1>
      <p>나 : {position[mypick]} </p>
      <p>컴퓨터 : {position[compick]}</p>
      <p>결과 : {result}</p>
      {position.map(item=><button key={item} onClick={btnClick} style={{fontSize : '1.5rem'}}>{item}</button>)}

    </div>
  )
}

export default Ex03