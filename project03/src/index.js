import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//1. useState를 사용하는 이유/개념
//  +)리엑트 이벤트
//import App from './App1';

// 2. useState 예제 - 좋아요 실습
//import App from './App2';

// 3. useState 실습 - 랜덤게임
//import App from './App3';

// 4. useState 실습 2 - 주사위게임
import App from './App4';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
