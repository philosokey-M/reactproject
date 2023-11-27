import React from 'react'
import './AppExample.css';
import Introduction from './components/Introduction'

const AppExample = () => {
  return (
    /*여러분들의 팀원을 소개해주세요! 
    이름:
    좋아하는 노래
    MBTI :
    단, Component와 props의 개념 이용할 것
    - 필수조건 : MemberBox라는 컴포넌트를 생성

    다 하신분들은 캡처해서 올려주시고
    혹시 너무 빨리 끝내버리면 디자인하기
    */
    <div>
        <Introduction name='김드보라' music='윤하-사건의 지평선' mbti='intj'/>
        <Introduction name='이윤호' music='박혜원-너에게로' mbti='infp'/>
        <Introduction name='진찬호' music='이승윤-허튼소리' mbti='esfj'/>

    </div>
  
    )
}

export default AppExample