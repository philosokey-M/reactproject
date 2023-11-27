import React from 'react'

const App1 = () => {
/* Map함수란? 
- 배열함수의 한 종류
- 주어진 함수를 호출한 결과를 모아서 새로운 배열을 생성한다.
*/

let teacherList = ['선영표', '박수현', '김석훈', '최영화']

let teacherRender = teacherList.map(item=> <h1>{item}</h1>)

// 일반적인 case
console.log(teacherList[0]+'선생님');

// map함수 이용
let newList = teacherList.map(item => item+'선생님');
console.log(newList);

// 배열 내 객체
let person =[
    {name : '장원영', age:20, gender:'여자'},
    {name : '아이유', age:30, gender:'여자'},
    {name : '차은우', age:29, gender:'남자'}


];

let newPerson = person.map(item => '안녕하세요! '+item.name+'입니다.')
console.log('newPerson : ', newPerson);

 /* Filter 함수
 - 배열의 각 요소에 대해서 주어진 함수의 결과 값이 true인 요소들만 모아서 
    새로운 배열로 반환하는 함수를 의미한다.
 */
let womanList =person.filter(item => item.gender == '여자')
console.log('woman filter : ', womanList);

// person 이라는 배열 내에서 나이가 29살 이상인 사람만 모아서 adultList 를 생성
// 출력후 캡쳐해서 단톡방에 올려주세요~

let adultList =person.filter(item => item.age >=29)
console.log(adultList);


//map 예제!! ======================
// 화씨로 모아둔 데이터를 섭씨로 출력해보자!
// 섭씨 = 5/9*(화씨-32)

const cityArr = [
    {city:'seoul', temp : 86},
    {city:'gwangju', temp : 85},
    {city:'busan', temp : 72}
];

// newCityArr 라는 새로운 배열을 생성 / 화씨가 아닌 섭씨로 출력

// item => item.name <- 이런식으로 작성하는 것은 Arrow Function의 줄임말
// (item) => {return item.name}이 원래 식

// 함수로 분리
const toCelcius = (item) =>{
    // ... 스프레드 문법 (ES6) 
    // 객체나 배열과 함께 사용하면 내가 변경할 아이템 제외하고
    // 나머지는 그대로 값을 유지
    return {...item, temp: 5/9*(item.temp-32)}
}
let newCityArr=cityArr.map(toCelcius)
console.log(newCityArr);

// Filter 함수 예제
let nums = [1,2,3,4,5,6];

// 1. nums 배열 안에서 짝수만 모아서 배열 => evenNums
//      [결과] 짝수 : [2,4,6]
let evenNums=nums.filter(item=> item%2==0)
console.log('1번 짝수 : ',evenNums);


// 2. evenNums 안에 있는 짝수 데이터에 *10
//      [최종결과] : [20,40,60]
let final=evenNums.map(item=> item*10)
console.log('[최종결과] :', final);

// 선생님 버전
let evenNums2 =nums 
                .filter(item=>item%2==0)
                .map(item=> item*10)
console.log('[샘 ver. 최종결과] 짝수 :', evenNums2);
return (
    <div>
        <h1>자바스크립트 map(), filter() 함수 익히기</h1>
        
            {teacherRender}
        
    </div>
  )
}

export default App1