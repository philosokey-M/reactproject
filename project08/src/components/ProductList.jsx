import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = ({list, setList}) => {
  /*
  (1) public 안에 둔 bestList.json 값을 가지고 올 것
      -> axios 이용, useEffect 이용, useState 배열 이용
  (2) 가지고 온 데이터 state 값 관리
      -> map 함수 이용, props 처리
  
  */

 // (1-1) 가지고 온 데이터 넣어줄 state생성
 //const [itemList, setItemList]=useState([]);

 // (1-2) 데이터 가져오기 위한 useEffect 및 axios 이용
useEffect(()=>{
  
  axios
  //(1-3) axios 내 데이터 가져올 주소입력
  .get('http://localhost:3000/bestList.json')
  
  // (1-4)응답 값 받아와서 1-1에서 생성해둔 state에 세팅
  .then((res)=>{
          console.log(res.data.list);
          setList(res.data.list)
  })
  .catch(()=>{
    //실패
})
},[])


  return (
    <div className='main-container'>
      {list.map((item,index)=><ProductItem idx={index} item={item} key={item.no}/>)}
    </div>
  )
}


export default ProductList