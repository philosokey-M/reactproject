import React, { useEffect, useState } from 'react'

const Main = () => {

  const [id, setId] = useState()

  useEffect(()=>{
    if(sessionStorage.getItem('id')){
      setId(sessionStorage.getItem('id'))
    }else if(localStorage.getItem('id')){
      setId(localStorage.get('id'))
    }
  },[])
  
  return (
    <div className='main-container'>
      <img 
      width='600px'
      src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp'></img>
    <h1>
      {id
      ? <span>{id}</span>
      : <span>당신</span>}근처의 당근마켓
    </h1>
    <h2>당다라당다라당당근마켓</h2>
    </div>
  )
}

export default Main