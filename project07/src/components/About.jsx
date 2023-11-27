import React from 'react'
import { Link, useParams } from 'react-router-dom'



const About = () => {



  return (
    <div>
        <p>About</p>

        <Link to="/detail/1?cate=공부">[1] 정처기 스터디 구함</Link><br/>
        <Link to="/detail/2cate=공부">[2] 토익 스터디 구함</Link><br/>
        <Link to="/detail/3?cate=운동&&pop=인기">[3] 골프 치실분?</Link>

        <hr/>
        <Link to='/'>Main으로 이동</Link>
       
    
    </div>
  )
}

export default About