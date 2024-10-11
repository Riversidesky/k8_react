import { useEffect, useState, useRef } from "react"
import TailCard from "../UI/TailCard";

export default function Festival() {
    const [td, setTd] = useState([]);
    const [gg, setGg] = useState([]);

    const [selgu, setSelgu] = useState([]);

    //select box 제어
    const gu = useRef();

    const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=40&resultType=json`

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(item => setTd(item.getFestivalKr.item))
    }, [url])
    // }, [])

    useEffect(() => {
        console.log(td)
        let tm = td.map(item => item.GUGUN_NM)
        // console.log([... new Set(GUGUN)].sort())
        tm = [...new Set(tm)].sort()

        tm = tm.map(item => <option key={item} value={item}>
                                {item}
                            </option>)
        setGg(tm)
    }, [td])

    //option 선택이 되면
    const guSel = () => {
        console.log(gu.current.value)
        guCard(gu.current.value);
    }

    const guCard = (i) => {
        const tm = td.filter(item => (item.GUGUN_NM === i))
        let tag = tm.map(item => <TailCard   key = {item.UC_SEQ} 
                                        imgUrl = {item.MAIN_IMG_THUMB}
                                        title = {item.MAIN_PLACE}
                                        content = {item.TITLE}
                                        kw = {item.USAGE_DAY_WEEK_AND_TIME} />)
        setSelgu(tag)
    }


  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-cyan-800">
        부산축제정보
        </div>
        <div className="w-10/12 p-5 flex justify-center items-center">
            <select className="w-1/2 form-select" onChange={guSel} ref={gu}>
                <option value='--지역선택--'>--지역선택--</option>
                {gg}
            </select>
        </div>
        <div className="w-10/12 p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {selgu}
        </div>
    </div>
  )
}
