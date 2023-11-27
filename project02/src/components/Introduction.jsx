// 컴포넌트 구조를 쉽게 꺼내오는 방법! rafce + Enter

import React from 'react'

const Introduction = ({name, music, mbti}) => {
  

    return (
    <div className="intro-container">
    <p>{name}</p>
    <p>{music}</p>
    <p>{mbti}</p>
    </div>
  )
}

export default Introduction
