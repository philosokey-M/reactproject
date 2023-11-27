import React from 'react'

const PhotoCard = ({name, url}) => {
  
    let cardStyle ={
        border : "5px solid pink"
    }
    
    return (
    <div style={cardStyle}>
        {name}
        <img src={url} width='300px'></img>
    </div>
  )
}

export default PhotoCard