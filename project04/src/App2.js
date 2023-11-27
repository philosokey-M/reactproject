import React from 'react'
import PhotoCard from './components/PhotoCard'
const App2 = () => {

    let list=[
        {name : '아이유',
        photoUrl :'https://cdn.mhns.co.kr/news/photo/201710/80596_134727_1149.png'
        },
        {name : '수지',
        photoUrl :'https://thumb.mt.co.kr/06/2020/08/2020081820372675405_1.jpg/dims/optimize/'
        },
        {name : '김채원',
        photoUrl :' https://blog.kakaocdn.net/dn/bow8SM/btrLiqTbabG/e20ioGdKkwPYmXkDRkjkok/img.jpg'
        },
    ]

   let newList = list.map(item => <PhotoCard name={item.name} url={item.photoUrl} key={item.name}/>)
   return (
    <div>
        {newList}
    </div>
  )
}

export default App2