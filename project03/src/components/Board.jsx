import React from 'react'

const Board = ({name,img,score}) => {
  return (
    <div className='board-item'>
        <h3>{name}</h3>
        <img src={img}></img>

        <h4>현재 점수는?</h4>
        <h3>{score}</h3>
    </div>
  )
}

export default Board