import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. map함수 , filter 함수(ES6 문법)
//import App from './App1';

// 2. Map함수로 컴포넌트를 렌더링해보자!
//import App from './App2';

// 3. map 함수로 메뉴판을 만들어보자!
import App from './App3';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
