import React from 'react'

const SubItem2 = ({changeData}) => {
  return (
    <div>
        <input type='text' onChange={(e)=>{changeData(e.target.value)}}></input>

    </div>
  )
}

export default SubItem2