
import './App.css';
import Menubox from './components/MenuBox';

function App() {

  /* 컴포넌트(Component)
  - 반복되는 코드를 하나로 묶어서 모듈화 => 컴포넌틔로 만들어준다
  - 내가 원하는 코드를 묶어서 마치 하나의 태그 처럼 사용을 함
  
  ** 반드시 컴포넌트는 대문자로 시작을 해야한다
  => 기존 HTML태그 (DOM요소)와 구분을 하기위함

  ** export - import는 필수
  */

  let price4500 = 4500

  return (
    <div>
      <Menubox name="김지홍" menu="아이스아메리카노" price="3000"/>
      <Menubox name="김용준" menu="페퍼민트" price={price4500}/>
      <Menubox name="허광영" menu="요거트스무디" price="5000"/>
      <Menubox name="류상지" menu="카푸치노" price={price4500}/>

    </div>
  );
}

export default App;
