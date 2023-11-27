import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {
    /* useParams
    - url의 파라미터 정보를 가져올 수 있는 React Hook
    - 한가지 정보만 사용 가능 (보통 고유번호)
    - 보통은 물품 or 게시글의 고유한 번호나 ID값을 설정하는데 적합하다
    
        a. Route 설정
        - <Route path="경로:파라미터변수" element={컴포넌트}>

        b. let {파라미터변수} = useParams()

    */

//        let num = useParams() -> 아래 div에 {num.num}이라고 해야함
        let {num} = useParams() // -> 아래 div에 {num}이라고만 하면됨
        console.log('num :', num);

        const [query, setQuery] = useSearchParams()
        console.log('query :',query.get('pop'));

        /* useSearchParams()
        - url의 쿼리스트링 값을 가져와서 사용
        - 여러 값을 사용할 수 있다
        ex) 검색 상품, 인기 상품, 품질 상품 ... 일시적인 정보들
         */


        return (
    <div>
        {query.get('pop') && <span>[인기게시글]</span>}
        {num}번째 게시글입니다. {query.get('cate')}관련게시글

    </div>
  )
}

export default Detail