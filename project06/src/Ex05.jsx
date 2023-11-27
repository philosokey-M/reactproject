import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Ex05 = () => {
  /*
  Nasa API
  최근 일주일 간의 APOD가져오기
  */


  const apodUrl ='https://api.nasa.gov/planetary/apod?start_date=2023-08-08&end_date=2023-08-15&api_key=oBN8gJWbocjcEdiEzAYOyBCkwYEzpPyrEXPBtVnx'
  
const [img,setImg] = useState([]);

  useEffect(()=>{
    axios
    .get(apodUrl)
    .then((res)=>{
        console.log(res.data[1].url); //"https://apod.nasa.gov/apod/image/2308/MoonsJupiter_Coy_960.jpg"
        
        // useEffect 밖에서 생성한 state에 배열 데이터 세팅
        setImg(res.data)
    })
    .catch(()=>{
        console.log('error');
    })
  })
  
  return (
    <div>
      {/*배열을 map함수로 img태그 형태로 출력 */}
        {img.map((item)=>(
          <img 
          src={item.url}
          key={item.date}
          width='100%'></img>
        ))}
    </div>
  )
}

export default Ex05