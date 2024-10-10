import TailButton from "../UI/TailButton"
import TailCard from "../UI/TailCard"
import { useState, useRef, useEffect } from "react"

export default function Gallery() {
    const dtRef = useRef();
    const [dt, setDt] = useState([]);
    const [info, setInfo] = useState();


    useEffect(() => {
        dtRef.current.focus()
    }, [])

    useEffect(() => {
        // console.log(dt)
        let tag = dt.map(item => <TailCard   key = {item.galContentId} 
                                            imgUrl = {item.galWebImageUrl}
                                            title = {item.getTitle}
                                            content = {item.galPhotographyLocation}
                                            kw = {item.galSearchKeyword} />)
        setInfo(tag)
    }, [dt])

    const handleDt = async () => {
        if (dtRef.current.value === '') {
            alert("값을 입력해주세요")
            dtRef.current.focus()
            return;
        } 
        const apiKey = process.env.REACT_APP_API_KEY
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1"
        let keyword = `${dtRef.current.value}`
        url += `?serviceKey=${apiKey}`
        url += `&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`

        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => setDt(data.response.body.items.item))
        //     .catch(err => console.log(err))

        const resp = await fetch(url);
        const data = await resp.json();
        // console.log("getFetch", data.response.body.items.item)
        setDt(data.response.body.items.item)
    }

    const handleClickC = () => {
        dtRef.current.value = ''
        dtRef.current.focus()
        setInfo([])
    }

  return (
    <div className="w-full flex flex-col justify-center items-center">
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
        <div className="w-10/12 p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {info}
        </div>
    </div>
    
  )
}
