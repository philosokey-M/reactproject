import React from 'react'
import { useState } from 'react'
import {Map, MapMarker} from 'react-kakao-maps-sdk'

const Ex02 = () => {
  /*
1.  카카오 위치지도 띄우기
  lat : 33.450705
  lng : 126.570677
2. 마커 여러개 띄우기 => state생성 
3. 마우스 이벤트에 따른 마커 정보 보여주기 
4. smhrd 버튼 클릭시 지도의 중심 위치를 이동
    lat : 35.149896
    lng : 126.9197772
5. smhrd 버튼 클릭시 마커 띄우기 , level 값 8로 조정
동구점 => lat: 35.149896, lng: 126.9197772
남구점 => lat: 35.110479, lng: 126.877456 

*/

// 지도의 중심 위치를 나타내는 state 생성
    const [centetLat,setCentetLat]= useState(33.450705)
    const [centetLng,setCentetLng]= useState(126.570677)
    const [level,setLevel] = useState(3)

    const [data, setData] = useState([
    {
        content : <div>카카오</div>,
        latlng: {lat: 33.450705, lng : 126.570677}
    },
    {
        content : <div>생태연못</div>,
        latlng: {lat: 33.450936, lng: 126.569477}
    },
    {
        content : <div>텃밭</div>,
        latlng: {lat: 33.450879, lng: 126.56994}
    },
    {
        content : <div>근린공원</div>,
        latlng: {lat: 33.451393, lng: 126.570738}
    },
    {
        content : <div>스마트인재개발원(동구점)</div>,
        latlng: {lat: 35.149896, lng: 126.9197772}
    },
    {
        content : <div>스마트인재개발원(남구점)</div>,
        latlng: {lat: 35.110479, lng: 126.877456}
    },     
 ])

const MarkerEvent=({content, position})=>{
    // 마커를 화면에 보여줄 건지 결정하는 state 생성
    const [isVisible, setIsVisible] = useState(false)
    return(
    /*
        마우스 올렸을 때 => onMouseOver / isVisible : true
        마우스 내렸을 때 => onMouseOut / isVisible : false
    */
    <MapMarker 
        onMouseOver={()=>{setIsVisible(true)}}
        onMouseOut={()=>{setIsVisible(false)}}  
        position={position}>{isVisible && content}</MapMarker>
)}

const smhrdMarker = () => {
    console.log('smhrd btn click');
    setCentetLat(35.149896)
    setCentetLng(126.9197772)
    setLevel(8)
}
    return (

    <div>
        <Map 
        // 지도의 중심 좌표 => center
            center={{lat: centetLat, lng : centetLng}}
        // 지도의 크기 => style
            style={{width : '100%', height : '500px'}}
        // 지도의 확대 레벨 => level    
            level ={level}
            >

            {/* <MapMarker 
            position={{lat: 33.450705, lng : 126.570677}}>
                <div>
                    네 카카오 라쿠배 
                </div>

            </MapMarker>

            <MapMarker 
            position={{lat: 33.450936, lng: 126.569477}}>
                <div>
                생태연못 
                </div>

            </MapMarker>
            <MapMarker position={data.map(item=>{item.latlng})}>
                {data.map(item=>{item.content})}
            </MapMarker> */}

          {/* {data.map(item=><MapMarker position={item.latlng}>
            {item.content}
          </MapMarker>)} */}

            {data.map(item =><MarkerEvent 
            position={item.latlng}
            content={item.content}
            key={item.latlng.lat}></MarkerEvent>)}
        </Map>
        <button onClick={smhrdMarker}>스마트인재개발원</button>
    </div>
  )
}

export default Ex02