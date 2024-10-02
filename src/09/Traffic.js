import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  const [td, setTd] = useState([]);

  const getFetchData = () => {
    fetch(`https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?
        page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`)
        // .then(item => console.log(item))
        .then(item => item.json())
        // .then(data => console.log(data.data))
        .then(data => setTd(data.data))
        .catch(err => console.log(err))
  }

  useEffect(() => {
    getFetchData();
  }, [])

  useEffect(() => {
    // if(!td) return; 초기값 undefined(false)일때 map을 못돔
    console.log(td) //useState 초기값 만들때도 td가 변해서 []가 한번 나옴
    let tm = td.map(item => item['사고유형대분류']); // item.사고유형대분류
    tm = [...new Set(tm)] //중복제거
    console.log(tm)
  }, [td])

  return (
    <div className="w-full bg-gray-300 flex flex-col justify-center items-center">
        <TrafficNav title = '대분류' c={['1','2']}/>
        <TrafficNav title = '중분류' c={['3','4']}/>  
    </div>
  )
}
