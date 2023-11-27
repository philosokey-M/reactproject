
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Storage from './components/Storage';
import LoginPage from './components/LoginPage';
import { useState } from 'react';

function App() {
  /* 미션 수행 순서
  1) Route 처리
  - 설치, BrowserRouter, Routes, Route ... etc

  2) 컴포넌트 생성
  - 고정 컴포넌트 : Header, Footer
  - page 별 컴포넌트 : Main, ProductList, ProductDetail
  - 하위 컴포넌트 : ProductList 안에 ProductItem 이라는 컴포넌트

  3) 컴포넌트 이동
  - "/" => Main
  - "/list" => ProductList
  - "/detail" => ProductDetail

  detail 입력시 ProductDetail 나온 모습 캡처해서 단톡방!

  */
  
  const [list, setList] = useState([]);

/* 
App.js에서 list state 관리
const [list, setList] = useState([]);
<Main list={list} setList={setList}/>

*/

  return (
    <div className="container">

    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/storage' element={<Storage/>}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
