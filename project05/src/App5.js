import React, { useRef } from 'react'

/*** Context
- 리액트에서 전역적으로 데이터를 공유하는 보관함

(1) Context 생성
MyContext를 만들려면?
export const MyContext = createContext(null)
** createContext 자동완성 -> import O
(2) Context 사용
(2-1) 데이터 넣어주기
<MyContext.Provider value={{data1, data2, ...}}>
(2-2) 데이터 가져오기
data1을 가져오고 싶다면?
const {data1} = useContext(MyContext)

** Ref
- 특정 DOM 요소에 접근
- ex) 포커싱, 속성변경
div요소를 DOM으로 접근하고 싶다면?
(1) div요소에 달아줄 Ref 이름 지정 -> divRef
const divRef = useRef()
** useRef 자동완성 -> importO
(2) div요소에 만들어준 Ref 이름 설정
<div ref={divRef} */

const App5 = () => {
  //1. 사용자가 input 태그안에 입력한 값을 가져오기
  //2. 그 값에 따라서 사진의 src 속성을 변경하기
  const textRef = useRef(); //input
  const imgRef =useRef(); // img
  
  const imgList =[
    // {name : '이름', src : '이미지경로'}
    {name:'디지몬친구들', src:'https://i.namu.wiki/i/aSDQaQYIxmm2zOGK-4Do2-MYcLvR7A65cPC2y78czf0IXIuhAcptDoEdl1Xv8aM9ifku77uABm76RDpj-dvwLQ.webp'},
    {name:'파닥몬', src:'https://image.gamechosun.co.kr/wlwl_upload/dataroom/df/2018/06/14/906112_1528950152.png'},
    {name:'파피몬', src:'https://ncache3.ilbe.com/files/attach/new/20200708/377678/4988876686/11271361291/9b9bbfb745992d5943a9cc6763121593_11271361318.png'}
  ]
  const imgChange=()=>{
    console.log('input 입력값' , textRef.current.value);
    // 입력하는 값에 따라 src변경하기
    // 입력하는 값 -> textRef.current.value == imgList[i].name
    //src 변경 -> imgRef.current.src = imgList[i].src
    for(let i=0; i<imgList.length;i++){

        if(textRef.current.value == imgList[i].name ){
            imgRef.current.src = imgList[i].src
        }

//센세 ver.
/* switch(textRef.current.value){
  case imgList[0].name : imgRef.current.src = imgList[0].src; break;
  case imgList[1].name : imgRef.current.src = imgList[1].src; break;
  case imgList[2].name : imgRef.current.src = imgList[2].src; break;
  
} */ 
// 센세 ver2
/* imgList.foreach((imgItem)=>{
  if(textRef.current.value == imgItem.name){
    imgRef.current.src = imgItem.src;
  }
}) */  
    // input 요소에 자동 포커싱
    
  }
  textRef.current.focus()
}  
    return (
    <div>
        <h3>사진 pick</h3>
        <input ref={textRef}/>
        <button onClick={imgChange} onKeyUp={imgChange}>Click</button>
        <br/><br/><br/>
        <div>
            {/* src 속성에 imgList로부터 값을 가져와서
             기본이미지가 출력될 수 있도록 만들기 */}
            <img src={imgList[0].src}
            width='400px'
            ref={imgRef}/>
        </div>
    </div>
  )
}

export default App5