import React from 'react'
import menu from './menulist.json'
import MenuItem from './components/MenuItem';
import './App3.css'
const App3 = () => {

    console.log('menu.json :', menu);
    /*푸딩 메뉴판을 만들어보자
    
    1. menulist.json 파일의 데이터를 가져오기
    2. 사진 - 이름 - 가격 - 소개글 순으로 메뉴판을 나열
    3. 메뉴의 가격이 4200원 이상인 메뉴만 보여주기(선택)
    4. 예쁘게 디자인
    
    [조건!]
    - MenuItem이라는 컴포넌트를 이용할것
    - json 형태의 파일을 가져와서 배열에 담아줄 것
    - map 함수를 이용할 것

    */

    console.log('json이름',menu.list);
   let menuList = menu.list.map(item=>
   <MenuItem
   name={item.name} price={item.price}
   content={item.content} img={item.imgSrc}
   key={item.name} />) 
   let menuListPart = menu.list
                            .filter(item=> item.price>4200)
                            .map(item=>
                                <MenuItem
                                name={item.name} price={item.price}
                                content={item.content} img={item.imgSrc}
                                key={item.name} />)
  return (
    <div>
        <h1>전체메뉴</h1>
        <div className='menu-container'>
            {menuList}
        </div>
        <h1>4200원이상 메뉴</h1>
        <div className='menu-container'>
            {menuListPart}
        </div>
    </div>
  )
}

export default App3