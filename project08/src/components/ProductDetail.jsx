import React from 'react'
import {Link, useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {
  /*
  (1) num이름으로 useParams 생성
  (2) list 데이터 가져와서 상세정보 출력*/
let {num} =useParams()
console.log(list);
  return (
    <div className='main-container'>
      

      <img src={list[num].src} width='250px'></img>
      <h3>{list[num].title}</h3>
      <p>
        <span>{list[num].price}원</span>
        <br/>
        {list[num].delivery == 'free'
        ? <span>배송비 무료</span>
        : <span>배송비 {list[num].delivery}원</span>}
      </p>
      <Link to= "/list">
        목록으로 돌아가기
      </Link>
      </div>
      
      
  )
}

export default ProductDetail