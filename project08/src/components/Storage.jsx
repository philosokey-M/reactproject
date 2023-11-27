import React, { useState } from 'react'

const Storage = () => {

/* Storage
- 주의사항! local, session 둘다 브라우저에 저장하는 데이터
- DB에 저장되는 데이터가 아니기 때문에 유저별 저장 X

- local storage : 동일한 pc + 동일한 브라우저 => 데이터를 불러올 수 있음
ex) 자동 로그인, 로그인이 안된 채로 장바구니를 담았을 때, 7일간 보지않기...
=> 브라우저를 닫더라도 데이터가 계속해서 저장되어 있기 때문
=> 보안에 취약 

- session storage : 브라우저 창이 종료되면 세션이 함께 종료, 데이터 소멸
  ex) 로그인 기록

 */

// local 관련 state
const [localData, setLocalData] =useState()
const [localData2, setLocalData2] =useState()
const saveLocal = () =>{
  console.log('내가 저장한 데이터', localData);

  // 1-1) 로컬 스토리지에 데이터 저장하기
  localStorage.setItem('data', localData)

} 

const getLocal=()=>{
  // 1-2) 로컬 스토리지에서 데이터 꺼내오기
  //localStorage.getItem('data')
  setLocalData2(localStorage.getItem('data')) 
}

// session 관련 state
const [sessionData, setSessionData] = useState("")
const [sessionData2, setSessionData2] = useState("")

const saveSession = () =>{
  console.log('session Data', sessionData);

   // 2-1) 세션 스토리지에 데이터 저장하기
  sessionStorage.setItem('data', sessionData)

} 

const getSession =() =>{
  // 2-2) 세션 스토리지 데이터 꺼내오기
  setSessionData2(sessionStorage.getItem('data'))
}

  return (
    <div className='main-container'>
      <h1>저장소</h1>

      <h2>Local Storage</h2>
      <div>
        <input type='text' placeholder='저장할 데이터'
        onChange={(e)=>{setLocalData(e.target.value)}}></input>
        <button onClick={saveLocal}>저장하기</button>
      </div>
      <div>
        <button onClick={(e)=>{getLocal(e.target.value)}}>데이터 가져오기</button>
        <span>가져온 데이터 : {localData2} </span>
      </div>



      <h2>Session Storage</h2>
      <div>
        <input type='text' placeholder='저장할 데이터' 
        onChange={(e)=>{setSessionData(e.target.value)}}></input>
        <button onClick={saveSession}>저장하기</button>
      </div>
      <div>
        <button onClick={(e)=> {getSession()}}>데이터 가져오기</button>
        <span>가져온 데이터 : {sessionData2} </span>
      </div>

    </div>
  )
}

export default Storage