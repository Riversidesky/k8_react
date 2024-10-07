import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //전체 데이터
  const [td, setTd] = useState([]);

  //대분류 데이터
  const [c1, setC1] = useState([]);
  const [selC1, setSelC1] = useState();

  //사고유형 데이터
  const [c2, setC2] = useState([]);
  const [selC2, setSelC2] = useState();

  //정보 추출
  const [info, setInfo] = useState();

  const getFetchData = () => {
    fetch(`https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?
        page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`)
        // .then(item => console.log(item))
        .then(resp => resp.json())
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
    let tm = td.map( item =>  item['사고유형대분류'] ); // item.사고유형대분류
    tm = [...new Set(tm)]; //중복제거후 set타입을 배열로 만들어줌
    setC1(tm); // 대분류 생성
    console.log('대분류=', tm)
  }, [td])

  //대분류 선택 => 사고유형
  useEffect(() => {
    console.log('selC1=', selC1)
    let tm = td.filter(item => item['사고유형대분류']==selC1);
    tm = tm.map(item => item['사고유형']) // 흠...
    setC2(tm);
    console.log('사고유형=', tm)
    setInfo(''); // gma..
  }, [selC1])

  //사고유형 선택
  useEffect(()=>{
    if (!selC2 || !selC2) return;
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
    console.log('selC2=', selC2)  
    let tm = td.filter(item => item['사고유형대분류']==selC1 && item['사고유형']==selC2);
    console.log('tm=', tm[0])
    tm = tm[0] // object
    let tmk = infoKey.map((k, idx) => <div key={selC1 + selC2 + idx} className="flex justify-center items-center">
                                        <div className="font-bold">{k}</div>
                                        <div className="text-gray-500 pl-2">{parseInt(tm[k]).toLocaleString()}</div>
                                    </div>)
    setInfo(tmk)
  }, [selC2])

  return (
    <>
      <div className="w-full bg-gray-300 flex flex-col justify-center items-center">
          {c1 && <TrafficNav title = '대분류' c={c1} sel={selC1} setSel={setSelC1}/>}
          {c2 && <TrafficNav title = '사고유형' c={c2} sel={selC2} setSel={setSelC2}/>}  
      </div>
      <div className="grid grid-cols-5 gap-2">
        {info}
      </div>
    </>
  )
}
