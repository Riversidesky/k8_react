import TailButton from "../UI/TailButton"
import TailCard from "../UI/TailCard"
import { useState, useRef, useEffect } from "react"

export default function Gallery() {
    const dtRef = useRef();
    const [dt, setDt] = useState();


    useEffect(() => {
        dtRef.current.focus()
    }, [])

    const handleDt = () => {
        const apiKey = process.env.REACT_APP_API_KEY
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1"
        url += `?serviceKey=${apiKey}`
        url += "&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%84%9C%EC%9A%B8%20%EC%95%BC%EA%B2%BD%20%EC%B6%95%EC%A0%9C&_type=json"

        fetch(url)
            .then(resp => resp.json()
            .then(data => console.log(data.response.body.items.item))
            .catch(err => console.log(err))
        )
    }

    const handleClickC = () => {
        dtRef.current.value = ''
        dtRef.current.focus()
    }

  return (
    <div className="w-full">
        <div className="flex justify-center items-center font-semibold text-2xl p-3">
            한국관광공사_관광사진 정보
        </div>
        <div className="w-full p-5 grid grid-cols-1 lg:grid-cols-2 xl:gird-cols-3 gap-2">
            <div className="flex justify-center items-center">
                <input className="w-full h-10 flex justify-center items-center form-input" id="kw" name="kw" type="text" ref={dtRef} />
            </div>
            <div className="flex justify-center items-center">
                <TailButton caption = "확인" color = 'blue' handleClick={handleDt} size='w-1/2'/>
                <TailButton caption = "취소" color = 'blue' handleClick={handleClickC} size='w-1/2'/>
            </div>
        </div>
        {/* <TailCard   imgUrl = "http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
                    title = "서울빛초롱축제"
                    content = "서울특별시 종로구"
                    kw = "서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"/> */}
    </div>
    
  )
}
