import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({index, imgSrc, name, position}) => {

    const nav = useNavigate()

    /*
     프로필 카드 클릭시 해당하는 선수의 상세페이지로 이동
     /detail /index
     => useNavigate 사용
      
    */


    return (

<div className='item-item'>
        <img src={imgSrc} onClick={()=>{

            console.log("Detail 요청");
            let url = "http://15.165.160.192:8050/SpringBoot2/PlayerDetail.do?name="+name;

            axios.get(url)
                .then((res)=>{
                    console.log(res.data);
                })
            nav(`/detail/${index}`)
        }}/>
        {/* 리엑트는 테이블 테그할때 tbody나 thead로 감싸야 에러가 안뜸 */}
        <table>
            <tbody>
            <tr>
                <td>이름</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>포지션</td>
                <td>{position}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Item