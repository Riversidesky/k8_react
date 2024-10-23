import TailButton from "../UI/TailButton"
import { useRef, useEffect } from "react"
import getxy from './getxy.json';
import { useNavigate } from "react-router-dom";


export default function Fcst() {
    const date = useRef();
    const sido = useRef();
    const navigate = useNavigate();

    let today = new Date();
    today.getFullYear();
    today.getMonth();
    today.getDate();
    today = `${today.getFullYear()}-${(today.getMonth())+1}-${today.getDate()}`

    let tm = getxy.map(item => item["1단계"])
    tm = tm.map(item => <option key={item} value={item}>{item}</option>)

    const dateSel = () => {
        console.log(date.current.value)
    }

    const guSel = () => {
        console.log(sido.current.value)
    }

    const handleOk = (gubun) => {
        if (date.current.value === '') {
            alert('날짜를 선택하세요.')
            date.current.focus();
            return;
        }
        if (sido.current.value === '') {
            alert('지역을 선택하세요.')
            sido.current.focus();
            return;
        } 
        // console.log(gubun)
        const dt = date.current.value.replaceAll('-', '');
        const loc = getxy.filter(item => item["1단계"] === sido.current.value)[0]; // 값이 하나밖에 없어도 filter의 값은 배열이므로 [0]번째를 가져와야함
        console.log(loc)
        const x = loc["격자 X"];
        const y = loc["격자 Y"];
        navigate(`/fcstlist?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${sido.current.value}`)
    }

    useEffect(() => {
        console.log(getxy)
    }, [])


  return (
    <div className="w-10/12">
        <div className="flex justify-between mt-2">
            <div className="flex justify-center items-center font-semibold text-gray-500">기상청 단기예보</div>
            <div><TailButton caption="단기예보메인" color="blue" /></div>
        </div>
        <div className="w-full h-60 flex justify-center items-center text-2xl font-semibold">
            단기예보 선택
        </div>
        <div className="flex justify-center items-center">
            <input type="date" className="w-2/5 form-input mr-3" onChange={dateSel} ref={date} max={today} defaultValue={today}/>
            <select className="w-2/5 form-select ml-3" onChange={guSel} ref={sido} >
                <option value=''>--지역을 선택하세요--</option>
                {tm}
            </select>
        </div>
        <div className="flex justify-center items-center my-12">
            <TailButton caption="초단기예보" color="blue" handleClick={() => handleOk('초단기예보')} size="w-2/5" />
            <TailButton caption="단기예보" color="blue" handleClick={() => handleOk('단기예보')} size="w-2/5" />
        </div>
    </div>
  )
}

