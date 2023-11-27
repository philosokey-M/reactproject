import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';

//1. 양방향 데이터 전달
//import App from './App1';

//2. context API란? (useContext)
//import App from './App2';

//3. context 실습 (테마변경)
//import App from './App3';

//4. Ref 개념 (요소 크기 변경)
//import App from './App4';

//5. Ref 실습(이미지 변경)
//import App from './App5';

//6.Mini project - TodoList 만들기
import App from './App6';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
