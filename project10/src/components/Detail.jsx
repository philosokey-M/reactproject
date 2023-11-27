import React from 'react'
import {useParams} from 'react-router-dom'

const Detail = ({list}) => {
  let {index} =useParams();
 
  // list.filter((item)=> item.name === name)[0].imgSrc

  return (
<div className='item-item'>
        <img src={list[index].imgSrc}/>
  
        <table>
            <tbody>
                <tr>
                    <td>이름</td>
                    <td>{list[index].name}</td>
                </tr>
                <tr>
                    <td>포지션</td>
                    <td>{list[index].position}</td>
                </tr>
                <tr>
                  <td>나이</td>
                  <td>{list[index].age}</td>
                </tr>
                <tr>
                  <td>키, 몸무게</td>
                  <td>{list[index].height}cm, {list[index].weight}kg</td>
                </tr>
                <tr>
                  <td>소속팀</td>
                  <td>{list[index].team}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Detail