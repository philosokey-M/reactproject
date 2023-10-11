import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import List from './components/List';
import Detail from './components/Detail';
import './player.css'
import Item from './components/Item';
const Player = () => {
  /* 
(1) public 안의 json파일에서 데이터 가져오기
    => useEffect, axios 사용
    => state 생성 후 가져온 데이터 세팅
(2) 컴포넌트 생성 및 라우팅 설정
    => 메인페이지 : Main.jsx , /
    => 리스트페이지 : List.jsx , /list
    => 상세페이지 : Detail.jsx , /detail
*/
const [list, setList] = useState([]);

useEffect(()=>{
    console.log("Spring으로 요청");
    let url = "http://15.165.160.192:8050/SpringBoot2/PlayerList.do"

    axios
    .post(url, {responseType : 'blob'})
    .then((res) => {
        console.log(res.data[0].position);
        setList(res.data)
    })

}, [])
console.log(list);

    return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/list' element={<List list={list}/>}></Route>
            <Route path='/detail/:index' element={<Detail list={list} />}></Route>
  
        </Routes>
    </div>
  )
}

export default Player