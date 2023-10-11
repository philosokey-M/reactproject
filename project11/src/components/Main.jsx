import React from 'react'
import {Link} from 'react-router-dom'
const Main = () => {
  /*
  Player List 클릭시 List 컴포넌트로 이동
  */
  
    return (
    <div style={{
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    }}>
        <img src='https://i2.ruliweb.com/ori/22/12/03/184d7c0936553f367.webp'
        width='50%' height='250px'/>
        <Link to='/list' 
        style={{
            fontSize : "1.5em",
            fontWeight : 'bold',
            textDecoration : 'none',
            color : 'black',
            backgroundColor : 'lightGray',
            padding : '20px 30px',
            borderRadius : '20px'
        }}>
        희발 씨찬이형🤍
        </Link>
        
    </div>
  )
}

export default Main