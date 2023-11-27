import React, {useState} from 'react'




const App3 = () => {
/* 랜덤게임을 해보자
1) 컴퓨터가 뽑아주는 랜덤한 수를 담아주자(state)
2) 내가 누른 버튼의 수를 담아주자(state)
3) 두 숫자를 비교해서 같으면 '정답' 다르면 '오답'

*/
const [num, setNum] = useState(null);
const [numc,setNumc] = useState(null);

const btnCk =(e)=>{
    console.log(e.target.innerText); // e- event의 약자 이벤트가 일어나면 실행
                                    // .target => <태그>contents</태그> 가 나옴
                                    // .innerText => contents 만 나옴
    console.log(parseInt(Math.random()*3)+1);
     setNumc(parseInt(Math.random()*3)+1)
     setNum(e.target.innerText)

// if문으로 하면 순서가 함수-> 리턴 -> if문이라서 이상하게 작동한다...

}

  return (
    <div>
        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>
        
        <div>
            <p>내가 선택한 숫자 : {num}</p>
            <p>컴퓨터가 선택한 숫자 :{numc} </p>
            {num == numc 
            ? <p>축하합니다</p>
            :<p>실퍀ㅋㅋㅋ</p>}
    
        </div>


    </div>


    )
}

export default App3