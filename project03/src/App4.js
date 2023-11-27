import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';
import './App4.css'
import { useState } from 'react';
import { useEffect } from 'react';

const App4 = () => {
/* 주사위 게임을 만들어보자!
    STEP 1. '던지기' 버튼을 눌렀을 때 주사위의 모양 / 유저의 선택 / 컴퓨터의 선택
        1-1) 유저의 주사위 숫자가 랜덤으로 표시 된다. 
        1-2) 컴퓨터의 주사위 숫자 또한 랜덤으로 표시된다. 
        1-3) 유저의 숫자 / 컴퓨터의 숫자가 이미지로 표시된다 
    STEP 2. 결과를 비교해볼 것 (유저 - 컴퓨터의 숫자 비교)
        2-1) 내가 이겼을 경우에는 나의 점수 +1 
        2-2) 컴퓨터가 이겼을 경우에는 컴퓨터 점수 +1
    STEP 3. 먼저 점수가 5점이 된 사람의 최종 승리 
        => alert창 '당신의 승리입니다!' or '당신의 패배입니다!' 
    STEP 4. RESET버튼을 클릭 시, 모든 내용이 초기화 
        - 유저 점수, 컴퓨터 점수, 유저 선택, 컴퓨터 선택, 이미지의 변화 

    Hint ** state로 관리해줘야하는 정보들? 
     - 주사위 숫자 (유저, 컴퓨터) : 랜덤숫자 
     - 점수 (유저, 컴퓨터) 
     - 이미지경로

     + useEffect를 이용하여 게임 결과 및 점수를 기록!
     결과 문구 -> resultText
     내 점수 -> myScore
     컴퓨터 점수 -> comScore
    */

    //주사위 숫자
    const[mydice, setMydice] =useState(1);
    const[comdice, setComdice] =useState(1);
    
    // 결과 문구
    const[resultText, setResultText] = useState('시작전')
    const[myscore, setMyscore] =useState(0);
    const[Comscore, setComscore] =useState(0);


    //랜던한 수 return 시키는 함수 (1~6)
    const makeRandom =()=>{
       return parseInt(Math.random()*6)+1;        
    }

    // 주사위 숫자가 바뀔때에만 resultText값 구하여 출력하기
    useEffect(()=>{
        if(mydice>comdice){
            setResultText('승리')
            setMyscore(myscore+1)
        }else if(mydice<comdice){
            setResultText('패배')
            setComscore(Comscore+1)
        }else{
            setResultText('무승부')
        }

    },[mydice, comdice])

    // const countScore =()=>{
    //     let m;
    //     let c;
         
    //     if(mydice>comdice){
    //         m++;
    //         setMyscore(m)
    //     }else if(mydice<comdice){
    //         c++;
    //         setComscore(c)
    //     }


    // }




  return (
    <div className='container'>
        <div className='btn-container'>
        <h1>주사위게임</h1>
        <Button variant="danger" onClick={()=>{
            //던지기 버튼 클릭 시 로직
            console.log('던지기 click');
            setMydice(makeRandom());
            setComdice(makeRandom());
     
        }}>던지기</Button>{' '}
        <Button variant="secondary" onClick={()=>{
            setMydice(1);
            setComdice(1);
            setMyscore(0);
            setComscore(0);
        }}>Reset</Button>{' '}
        </div>
        <div className='board-container'>
            {/*Board라는 컴포넌트를 생성 */}
            <Board name='USER' img={`http://localhost:3000/img/dice${mydice}.png`} score={myscore}/>
            <Board name='COMPUTER' img={`http://localhost:3000/img/dice${comdice}.png`} score={Comscore}/>
        </div>
        {/* {mydice>comdice
        ?<h1>승리...</h1>
        :<h1>패배!!!</h1>
        } */}
        <h1>{resultText}</h1>
    </div>
  )
}

export default App4