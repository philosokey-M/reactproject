import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorResult = () => {
  const {myColor} = useContext(ColorContext);


  return (
    <div style={{
        width: '100px', 
        height :'100px', 
        backgroundColor : `${myColor}`}}></div>
  )
}

export default ColorResult