import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext';

const ColorList = () => {

    let color = ['red', 'orange', 'yellow', 'green','blue'];

  const {setMyColor} = useContext(ColorContext)

  return (
    <div style={{display : 'flex'}}>
    {color.map(item => 
        <div onClick={(e)=>{setMyColor(e.target.style.backgroundColor)}}
        key={item} style={{
            width : '100px', 
            height : '100px', 
            backgroundColor : `${item}`
        }}></div>        
    )}
    
</div>
  )
}

export default ColorList