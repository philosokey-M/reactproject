import React from 'react'


const MenuItem = ({name, price, content, img}) => {
    console.log(name, price, content, img)
 
 
    return (
    

        
    <div >
        <img src={img} alt='image'></img><br/>
        <p><b>{name}</b> {price}원</p>
        <p>{content}</p>
    </div>
        
 
    
    
  )
}

export default MenuItem