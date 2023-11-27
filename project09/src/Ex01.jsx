import React from 'react'
import {Map, MapMarker} from 'react-kakao-maps-sdk'

const Ex01 = () => {
  /*
  (1) install - react-kakao-maps-sdk
  (2) import - Map, MapMarker 등
  (3) Map - 지도 생성
        center => 지도 중심 위치 / 위도(lat), 경도(lng)
        style => 지도 크기
  (4) MapMarker - 마커 생성
  */
  
  
    return (
    <div>
        <Map center={{lat: 35.121252, lng : 127.002921}}
            style={{width : '100%', height : '500px'}}>

            <MapMarker 
            position={{lat: 35.121252, lng : 127.002921}}>
                <div>
                    무등산은 막걸리인데..
                </div>

            </MapMarker>
        </Map>

    </div>
  )
}

export default Ex01