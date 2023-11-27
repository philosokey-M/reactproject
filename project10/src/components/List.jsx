import React from 'react'
import Item from './Item'


const List = ({list}) => {
    console.log('List',list);
    /* 
    (1) 포지션이 MF인 선수만 나오는 배열을 생성하기
    (2) 만들어진 배열을 map 함수로 뿌려주기
    */
   const mfList = list.filter((item,index)=>item.position=='MF')
   
  return (
    <div className='list-container'>
        <h1>KOREA REPUBLIC</h1>
        <div className='item-container'>
            {list.map((item,index)=>
            <Item key={index} 
                imgSrc={item.imgSrc} 
                name={item.name} 
                position={item.position}
                index={index} />)}
        </div>
        <h1>MF</h1>
        <div className='item-container'>
            {mfList.map((item,index)=>
            <Item key={index} 
                imgSrc={item.imgSrc} 
                name={item.name} 
                position={item.position}
                index={index} />)}
        </div>
    </div>
  )
}

export default List