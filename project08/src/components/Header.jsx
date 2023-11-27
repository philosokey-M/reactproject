import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
const Header = () => {

  const [id, setId] = useState()

  useEffect(()=>{
    if(sessionStorage.getItem('id')){
      setId(sessionStorage.getItem('id'))
    }else if(localStorage.getItem('id')){
      setId(localStorage.get('id'))
    }
  },[])

  const handleLogout =()=>{
    sessionStorage.removeItem('ID_data')
    sessionStorage.removeItem('PW_data')
    localStorage.removeItem('ID_data')
    localStorage.removeItem('PW_data')
    window.location.href="/"
  }



  return (
    <div className='header-container'>
      <div className='link-container'>
        <Link to="/">마켓컬리</Link>
      </div> 
      <div className='link-container'> 
        <Link to="/list">상품목록</Link>
        {" "}
        <Link to="/storage">저장소</Link>
      </div> 
      <div className='link-container'>
        {id
        ? <p onClick={handleLogout}>로그아웃</p>
        : <Link to="/login">로그인</Link>
        }
        </div> 
    </div>
  )
}

export default Header