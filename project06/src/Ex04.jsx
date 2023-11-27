import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const Ex04 = () => {
/*
axios : 통신 라이브러리
(1) install -> npm i axios
(2) import -> import axios from 'axios'

    영화진흥위원회 API를 이용
    일일박스오피스 1~10위
    순위/영화이름/개봉일 가져오기
*/

const movieUrl='https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230815';
// key : 키 발급 번호
// targetDt : 가져올 날짜

// 넘어온 데이터가 담겨있는 배열을 넣어줄 state 생성
//    const [rank, setRank]= useState(0);
//    const [movieNm, setMovieNm] = useState('');
//    const [openDt, setOpenDt] = useState('')
    const [movie, setMovie] = useState([]);

// API Call -> didMount 단계에서 진행!
useEffect(()=>{
    /*
    axios를 통해서 데이터 가져오기
    (1) get(url)
    (2) then(callback) : 성공
    (3) catch(callback) : 실패
    */
   axios
   .get(movieUrl)
   .then((res)=>{
        //성공
        console.log(res.data.boxOfficeResult.dailyBoxOfficeList);
       
        /*
        순위 -> rank
        영화이름 -> movieNm
        개봉일 -> openDt
        */

        // 생성한 state에 배열을 세팅
        // setRank(res.data.boxOfficeResult.dailyBoxOfficeList.rank)
        // setMovieNm(res.data.boxOfficeResult.dailyBoxOfficeList.movieNm)
        // setOpenDt(res.data.boxOfficeResult.dailyBoxOfficeList.openDt)
        setMovie(res.data.boxOfficeResult.dailyBoxOfficeList);
        console.log(movie);
   }) 
   .catch(()=>{
        //실패
   })
},[])

  return (
    <div>
        {movie.map(item=><p key={item.rank}>{item.rank}위 {item.movieNm} {item.openDt}</p>)}

    </div>
  )
}

export default Ex04