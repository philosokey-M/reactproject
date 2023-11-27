/* 
클래스 형 컴포넌트 구조 꺼내는 단축키 : rcc + 엔터

Life Cycle : 컴포넌트의 생성부터 변화, 소멸까지의 전 과정
(1) mount : 컴포넌트가 나타남
    - constructor : 
(2) update : 컴포넌트 정보를 업데이트
    ** state변경, props변경
    부모 컴포넌트 리랜더링

(3) unmount : 컴포넌트가 사라짐
*/

import React, { Component } from 'react'

export default class Ex01 extends Component {
    constructor(){
        console.log('1. constructor');
        /* 
        constructor : 생성자
        -> 초기 state 값 설정
        -> 화면 랜더링 전, 가장 첫번째 단계
        */
        
        super();
        this.state ={
            text : 'Hello World',
            num : 0
        }
        this.increaseNum = this.increaseNum.bind(this)
        this.changetxt = this.changetxt.bind(this)

    }
    componentDidMount(){
        console.log('3.componentDidMount');
        /*
        componentDidMount : 랜더링 직후
        -> 첫화면 구성완료
        -> DOM접근 , API Call
        */

    }
    componentDidUpdate(){
        console.log('4. componentDidUpdate ');
        /*
        componentDidUpdate : 리렌더링 직후
        -> 화면구성 완료
        -> DOM접근 , 변경값 확인 */
    }
    increaseNum(){
        //console.log('work');
        this.setState({
            num: this.state.num=this.state.num+1
        })
    }
    changetxt(){
        this.setState({
            text: this.state.text='아..안녕 리엑트?'
        })
    }
    render() {
        console.log('2. render');
        /* render : 랜더링
        -> 화면을 구성하는 요소를 작성
        */
    return (
      <div>
        <p>{this.state.text}</p>
        <p>{this.state.num}</p>
        <button onClick={this.increaseNum}>+1</button>
        <button onClick={this.changetxt}>Change</button>

      </div>
    )
  }
}
