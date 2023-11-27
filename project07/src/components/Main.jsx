import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    /*Link 태그 
    - History API를 통해 브라우저 주소의 경로만 바꿔주는 기능
    - 하이퍼 텍스트를 사용할 땐 보통 a태그를 사용하지만,
        a태그는 클릭시 새로운 페이지를 불러오기 때문에 React의 SPA 성격과는 맞지 않다
    - 그래서 Link태그를 활용해서 주소값만 바꿔주는 것!!
    - BrowserRouter가 반드시 세팅되어 있어야한다.
  
    (1) import {Link} from 'react-router-dom'
    (2) <Link to ='경로'>링크명</Link>
  
    */

// 로그인 정보(true: 회원/ false : 비회원)
    let auth = true;

    /* useNavigate
    - 페이지 이동을 도와주는 React Hook
    
    (1) import {useNavigate} from 'react-router-dom'
    (2) const 변수 = useNavigate()
    (3) 페이지 이동을 해야할때, 변수("경로")

    */
    const nav = useNavigate()


    return (
    <div>
        <p>Main</p>
        <hr/>
        <Link to='/about'>About으로 이동</Link>
        {" "}
        <Link to='https://www.naver.com'>네이버로 이동</Link> 
        {" "}
        <button onClick={()=>{
            auth ? nav('/mypage') : nav('/about')
        }}>마이페이지로 이동</button>
    
    
    </div>
  )
}

export default Main