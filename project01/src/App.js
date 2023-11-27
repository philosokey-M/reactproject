import './App.css';

function App() {

  /* JSX (JS+XML)
  - 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성할 수 있는 파일 확장자
  - 장점 : HTML 요소에 접근할 때마다 DOCUMENT객체에 접근해줘야하는 JS와 달리
  하나의 파일 내에 HTML 요소가 있기 때문에 바로 접근이 가능하다
  - 가독성이 좋고, 기능별 분류가 좋다
  
  1. 표현식 사용 가능
   - HTML 문법 내에서 JS 문법을 사용하려면? {}안에 작성
   - {}안에는 if문을 사용할 수 없음
   
   *조건이 하나일때?
   - &&연산자 

   *조건이 두개일때?
   - 삼항연산자
   - 조건 ? true일때 실행문 : false일때 실행문
   
   *조건이 세개일때?
   -표현식 아닌, JS의 영역내에서 if문을 사용


   2. 여러 태그가 있다면, 반드시 하나의 부모요소로 감싸주어야한다.
   - 이때, div 태그가 아니어도 상관 X
   - <></> 도 가능

   3. 스타일링 적용
    a. css안에 작성 후, import
     -import 'css파일이 있는 경로'
        b. 객체 형태로 스타일링 작성
      - 원하는 태그의 style 속성으로 객체 입력
      - 해당 객체 안에 원하는 스타일을 key-value 형태로 작성
      - 단, 객체 안에서는 camelCase로 작성
      예를들어 css에서는 background-color라고 작성해야한다.
      js 객체 내에서는 backgroundColor라고 작성해야함

  4. 기존 문법과 다른 점들 
    a. class대신 className을 사용한다.
    
    b. 기존 html 태그 (DOM요소)를 사용할때는 무조건 소문자로 시작
    그 이유는 대문자는 따로 쓸일이 있음 : 컴포넌트
    c. content가 없다하더라도 끝태그를 생략할 수없다
      ex) html
    */ 

  let admin = "박수현";
  let openState = true;
  // C. 조건이 세개이상일때
  let sub="";


  if(admin ==="선영표"){
    sub ="리엑트"
  }else if(admin ==="최영화"){
    sub ="머신러닝/키초통계"
  }else if(admin==="박수현"){
    sub ="jsp/servlet" 
  }
  //** index.js React.strictMode를 켜놓으면 
  // 내 코드를 검사 -> 코드가 두번씩 실행됨 => 싫으면? 삭제 */
  console.log('현재과목은',sub,'입니다')
  
  //3-b. 디자인을 객체로
  //
  let txtStyle = {
    backgroundColor:'pink',
    fontStyle : 'italic'
  };

  return (
    <div>

   <div className='header' style={txtStyle}>{admin}의 {sub} 홈페이지에 오신 것을 환영합니다~!</div>
    
    {/* A.조건이 하나일때 */}
    {/* {openState && <p>도움이 필요하시면 불러주세요!</p>} */}
    
    {/* B.조건이 두개일때 */}
    {openState
    ? <p>도움이 필요하시면 불러주세요</p>
    :<div>오늘은 여름 휴가 입니다.다음에 방문해주세요</div> }

    {/* <div>오늘은 여름휴가입니다 다음에 방문해주세요</div> */}
    </div>
   );
}

export default App;
