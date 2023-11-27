import React from 'react'
import {useNavigate} from 'react-router-dom'
const ProductItem = ({item, idx}) => {
  console.log(item, idx);
  /*
  해당 아이템 div를 클릭했을 때, 
  아이템에 대한 상세페이지(ProductDetail)로 이동
  -> 상품별 고유번호 index 활용 : /detail/1, /detail/2
  */

  const nav = useNavigate()

  return (
    <div onClick={()=>{
      nav(`/detail/${idx}`)
  }} className='product-container'>
      <img src={item.src} width='250px' />
      <p>{item.title}</p>
      <p>{item.price}원</p>


    </div>
  )
}

export default ProductItem