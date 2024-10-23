import { useSearchParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import getcode from './getcode.json'

export default function FcstList() {
    const [sParams] = useSearchParams();
    const gubun = sParams.get('gubun')
    const dt = sParams.get('dt')
    const x = sParams.get('x')
    const y = sParams.get('y')
    const area = sParams.get('area')

    const sel = useRef();

    const [td, setTd] = useState([]);
    const [trs, setTrs] = useState([]);
    //옵션
    const [ops, setOps] = useState([]);

    const sky = {'1': '맑음(☀️)', '3':'구름많음(☁️)', '4':'흐림(🌥️)'}

    let url;

    console.log(gubun, dt, x, y, area)

    if (gubun === '단기예보') {
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
    }
    if (gubun === '초단기예보') {
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`
    }



    useEffect(() => {
    console.log(url)
    fetch(url)
        .then(resp => resp.json())
        .then(data => setTd(data.response.body.items.item))
        .catch(err => console.log(err))
    }, [url])

    useEffect(()=> {
        let tm = getcode.filter(item => item["예보구분"] === gubun); // 단기예보 가져오기
        tm = tm.map(item => <option key={item["항목값"]} value={item.항목값}>{item["항목명"]}({item["항목값"]})</option>)
        setOps(tm)
    }, [gubun])

    const handleSel = () => {
        console.log(sel.current.value)
        if(!td) return;

        let tr = td/*.filter(item => item.fcstDate === dt)*/.filter(item => item.category === sel.current.value)
        console.log(tr)
       // 항목값 = sel.current.value인 obj에서 항목명 뽑아내기
        const code = getcode.filter(item => item['항목값'] === sel.current.value)[0] // ?????
        console.log(code)

        tr = tr.map(item => <tr key={item.category+item.fcstTime} className="font-bold text-lg">
                                <td>{code['항목명']}({item.category})</td>
                                <td>{item.fcstDate.slice(0,4)}-{item.fcstDate.slice(4,6)}-{item.fcstDate.slice(6,8)}</td>
                                <td>{item.fcstTime.slice(0,2)}:{item.fcstTime.slice(2,4)}</td>
                                <td>{item.category === 'SKY' ? sky[item.fcstValue] : item.fcstValue + code.단위 }</td>
                            </tr>)

        setTrs(tr)
    }

  return (
    <>        
        <div className="w-full flex justify-between items-center">
            <div className="w-1/2 flex font-bold justify-center items-center text-2xl">
                {gubun} : {area} ({dt.slice(0,4)}-{dt.slice(4,6)}-{dt.slice(6,8)})
            </div>
            <select className="w-1/2 form-select m-8" onChange={handleSel} ref={sel}>
                <option value=''>--항목명--</option>
                {ops}
            </select>
        </div>
        {/* <table className="w-full flex flex-col justify-center items-center">
            <tr className="w-10/12 flex justify-between items-center">
                <th>항목명</th>
                <th>예측시간</th>
                <th>항목값</th>
            </tr>
            {th}
        </table> */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xl text-white uppercase bg-black">
            <tr>
                <th scope="col" className="px-6 py-3">
                    항목명
                </th>
                <th scope="col" className="px-6 py-3">
                    예측일자
                </th>
                <th scope="col" className="px-6 py-3">
                    예측시간
                </th>
                <th scope="col" className="px-6 py-3">
                    예측값
                </th>
            </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
      </table>
     </>

  )
}
