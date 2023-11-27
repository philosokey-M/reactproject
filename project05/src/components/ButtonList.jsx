import React from 'react'

const ButtonList = ({changeBox}) => {
    const btnText = ['작게','원본', '크게']
    return (
    <div>
        {btnText.map(item=>
        <button onClick={changeBox} key={item}>{item}</button>)}
    </div>
  )
}

export default ButtonList