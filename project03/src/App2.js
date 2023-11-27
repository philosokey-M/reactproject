import React, {useState} from 'react'
import newPic from './img/pic2.png'
const App2 = () => {

    /* 실습 문제
    step1 하트를 클릭시 하트를 꽉찬 하트로 변경
    step2 하트를 클릭시 좋아요 1개로 변경
    step3 '좋아요'인 상태에서 하트를 클릭 시 다시 원래대로
            => 비어있는 하얀하트/좋아요
             */

    const [heart, setHeart] = useState('🤍');
    const [num, setNum] = useState(0)
    const ck1 = ()=>{
        if(num==0){
            setHeart('❤');  
            setNum(1)      
        }else{
            setHeart('🤍')
            setNum(0)
        }
     }
    // const ck2= () => {
    //     setHeart('🤍')
    //     setNum(num-1)
    // }

    // const cka =()=>{
    //     if(num>=1){
    //         return ck2;
    //     }else{
    //        return ck1;
    //     }
        
    // }
    /*Reat에서 내부 이미지를 가지고 오는 방법!
    - 외부 이미지 가지고 오는건 html 과 동일

    1) src 폴더 이용하기
    - import 이미지 변수 from '경로'
    - <img src ={이미지 변수}>

    2) public 폴더 이용하기
    - public 폴더 안에 파일을 보관
    public 폴더는 서버와 계속해서 통신을 진행하고 있기 때문에
    폴더 안에 저장하는 것 만으로도 고유주소를 갖게됨 (업로드)
    - 해당 주소값을 가져와서 사용하면된다.
    - http://localhost:3000/img/pic1.jpg
    */

  return (
    <div>
        <p>Instagram</p>
        <img 
        src={newPic}
        width = '150px'></img>
        <div>
            <span onClick={ck1}>{heart}</span>{" "}
            <span >싫어요 {num}개</span>
        </div>
    </div>
  )
}

export default App2