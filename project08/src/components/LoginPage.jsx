/* Login 화면 단
최종 작성자 : 김지홍
20023.08.22 */

import React, { useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
/*
1. 로그인 클릭시 사용자가 입력한 id,pw받아서
2. id가 admin이고 pw가 1234라면 회원 O
      => 세션에 저장 id,pw

*/

const LoginPage = () => {
  const nav = useNavigate()
  
  // session 관련 state
const [sessionID, setSessionID] = useState("")
const [sessionPW, setSessionPW] = useState("")

const [autoCheck, setAutoCheck] = useState(false)

const checkRef = useRef()

/** login을 실행하는 함수(세션저장, 페이지 이동, 데이터전달) */
const checkInfo=()=>{ 
  //setSessionID(sessionStorage.getItem('data')) ->이거하면 무한렌더링걸림
  //setSessionPW(sessionStorage.getItem('data2'))

    console.log('check',checkRef.current.checked);


  // Server로 데이터를 보내는 방법? axios
  // axios
  // .post("서버주소", {id: "admin"})
  // .then(()=>{
  //   console.log('데이터 전송 성공!');
  // })

  /* Server가 있는 상태라면 DB에 연결을 해서 , DB에서 파악 <-  */
  if(sessionID== 'admin' && sessionPW=='1234'){
    console.log('로그인 성공');
    sessionStorage.setItem('ID_data', sessionID)
    sessionStorage.setItem('PW_data', sessionPW)
    
      if(checkRef.current.checked){
        sessionStorage.setItem('ID_data', sessionID)
        sessionStorage.setItem('ID_data', sessionPW)
      }

      //리엑트안에서 움직이는게 아니라, 새로고침을 하면서 움직여야할때
      window.location.href ="/"

  }else{
    alert('틀렸어')
  }

}


// const autoLogin=()=>{

//   if(autoCheck==true){
//     sessionStorage.setItem('autoCheck', autoCheck)
//     setSessionID(sessionStorage.getItem('ID_data')) 
//     setSessionPW(sessionStorage.getItem('PW_data'))
//     nav(`/`)
//   }

// }


  return (
    <div className='main-container'>
 

      <div>
        ID <input type='text'
        onChange={(e)=>{setSessionID(e.target.value)}}></input>
      </div>
      <div>
        PW <input type='password'
        onChange={(e)=>{setSessionPW(e.target.value)}}></input>
      </div>
      <div>
      <input type='checkbox' ref={checkRef} />자동로그인
      </div>
      <button onClick={checkInfo}>로그인</button>
    </div>
  )
}

export default LoginPage