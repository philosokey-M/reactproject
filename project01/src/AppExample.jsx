// App.js 와 똑같은 역할

function AppExample(){
/*
    (1)사용자에게 이름을 입력받아준다. (prompt)
    (2)오늘의 날짜를 가져올것 --> 저랑 같이!
    (3) 조건에 따라 계절을 분류
        - 3~5 : 봄
        - 6~8 : 여름
        - 9~11 : 가을
        - 12~2 : 겨울
    */

    // **tip! 현재 날짜 가기고 오기
    let name= prompt('이름을 적어주세요');

    let today = new Date();
    console.log(today);

    //case a. 연도-월-일 .toLocaleDateString()
    console.log(today.toLocaleDateString());

    //case b. 현재 몇월? .getMonth()
    console.log(today.getMonth()+1);
    let season ="";
    if(today.getMonth()+1==3 || today.getMonth()+1 ==4 ||today.getMonth()+1 ==5 ){
        season = "봄";
    }else if(today.getMonth()+1==6 || today.getMonth()+1 ==7 ||today.getMonth()+1 ==8 ){
        season = "여름";
    }else if(today.getMonth()+1==9 || today.getMonth()+1 ==10 ||today.getMonth()+1 ==11 ){
        season = "가을";
    }else if(today.getMonth()+1==12 || today.getMonth()+1 ==1 ||today.getMonth()+1 ==2 ){
        season = "겨울";
    }

    return(
        <div>
            <p>{today.toLocaleDateString()}</p>
            <hr />
            <p>{name}님 {season}입니다. 좋은 하루 보내세요</p>

        </div>
    )
}

export default AppExample;