// 컴포넌트 구조를 쉽게 꺼내오는 방법! rafce + Enter

import React from 'react'

const MenuBox = ({name, menu, price}) => {
  
    /*Props(프로피디 or 프롭스)
    - 상위 (부모) 컴포넌트에서 하위 (자식) 컴포넌트로 값을 전달할 때 사용
    
    - 상위 컴포넌트에서 값을 보내는 방법?
    <컴포넌트 이름 key ="value"/>
   
    -상위 컴포넌트에서 보낸 데이터를 하위 컴포넌트에서
    받는 방법?
    A. 함수의 형태이기때문에, 값은 매개변수를 통해서 받는다
    매개변수.key
   
    case 1. (props)매개변수 => props.name / props.menu


** Tip! 객체 비구조화 할당이란?

    */

 //   console.log('props : ' ,props);
  
    return (
    <div className="menu-container">
    <p>{name}</p>
    <p>{menu}</p>
    <p>{price}원</p>
    <hr/>
    </div>
  )
}

export default MenuBox

/* 
const Menubox = ()=>{
    return(
        
        <div className="menu-container">
        <p>김지홍</p>
        <p>아이스아메리카노</p>
        </div>
        )
        
    }
    
    export default Menubox;
*/