import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react";

export default function MyRef() {
  //state 변수
  const [valS, setValS] = useState(0)

  //ref변수
  const valR = useRef(0);
  const x = useRef();
  const y = useRef();
  const z = useRef();

  //컴포넌트 변수
  let valC = 0;

  const handleBClick = () => {
    valC += 1;
    console.log('valC = ',valC)
  }

  const handleOClick = () => {
    setValS(valS+1)
  }

  const handlePClick = () => {
    valR.current = valR.current + 1;
    console.log('valR=', valR)
  }

  const handleAdd = () => {
    if (x.current.value == '') {
        alert('값을 입력하세요')
        x.current.focus();
        return;
    }
    
    if (y.current.value == '') {
        alert('값을 입력하세요')
        y.current.focus();
        return;
    }

    z.current.value = parseInt(x.current.value) + parseInt(y.current.value)
  }

  const handleFocus = () => {
    z.current.value = ''
  }

  useEffect(() => {
    x.current.focus() //새로고침했을때 커서
  }, [])


  return (
    <>
        <div className="w-3/5 grid grid-cols-3 gap-4 my-10">
            <div className="text-xl font-bold text-blue-800">컴포넌트 변수 : {valC}</div>
            <div className="text-xl font-bold text-orange-800" >state 변수 : {valS}</div>
            <div className="text-xl font-bold text-pink-800">ref 변수 : {valR.current}</div> 
            
            <div><TailButton caption = {"컴포넌트 변수"} color = {'blue'} handleClick = {()=>handleBClick()}/></div>
            <div><TailButton caption = {"state 변수"} color = {'orange'} handleClick = {()=>handleOClick()}/></div>
            <div><TailButton caption = {"ref 변수"} color = {'pink'} handleClick = {()=>handlePClick()}/></div>
        </div>

        <div className="w-3/5 grid grid-cols-5 gap-2 p-2 bg-slate-300">
            <div className="flex justify-center items-center text-center"><input ref={x} type='number' id='txt1' name='txt1' className="h-10 w-12 text-center" onFocus={handleFocus}></input></div>
            <div className="text-2xl font-bold flex justify-center items-center text-center">+</div>
            <div className="flex justify-center items-center text-center"><input ref={y} type='number' id='txt2' name='txt2' className="h-10 w-12 text-center" onFocus={handleFocus}></input></div>
            <div className="flex justify-center items-center text-center"><div><TailButton caption = {"="} color = {'lime'} handleClick = {()=>handleAdd()}/></div></div>
            <div className="flex justify-center items-center text-center"><input ref={z} type='number' id='txt3' name='txt3' readOnly className="h-10 w-8 text-center"></input></div>
        </div>
    </>

  )
}
