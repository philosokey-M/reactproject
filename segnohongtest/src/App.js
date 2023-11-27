import logo from './logo.svg';
import './App.css';

function App() {

  /* React Router
  1. react router dom 설치
  - npm i react-router-dom
  
  2. BrowserRouter
  - 브라우저의 주소를 감지한다
  - 필수적으로 사용
  - 라우팅 기능을 사용할 컴포넌트 전체를 감싸줘야함
  - index.js에 가서 App을 감싸는 방식이 흔함

  3. Routes - Route
  - Routes : 여러 경로들을 감싸서, 하위 Route 중
              조건에 맞는 Route 하나만 렌더링 해주는 역할
              과거에는  Swich라는 문범의 이름으로 사용
              ex) User : "나 메인페이지 줘"
                  Routes : "내가 가지고 있는 경로를 보자"
                  "메인이 있네 ㅇㅋ 여기있어"
- Route : 여러 경로
          필수 속성 2가지
          사용자가 이렇게 요청을 했을 때~ : path
          이 컴포넌트를 보여주세요 : element
                  */

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

    </div>
  );
}

export default App;
