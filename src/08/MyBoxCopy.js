import { useState, useEffect } from "react";

export default function MyBoxCopy() {
  const [b, setB] = useState(false);
  const [o, setO] = useState(false)
  const handleBlue = () => {
    setB(!b)
    console.log(b) // 바뀌기전값이 찍힘 ??
  }
  const handleOrange = () => {
    setO(!o)
  }

//   useEffect(()=>{
//     console.log(b, o) //초기값 false를 넣었기때문에 시작하자마자 한번은 실행
//     // if (b==true) {
//     //     setB("bg-blue-400")
//     // }
//   }, [b, o]) //b값이 바뀌면(false-true) useEffect

useEffect(()=>{
    console.log(b)
  }, [b]) 

  useEffect(()=>{
    console.log(o)
  }, [o]) 

  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className={`w-1/3 h-1/3 m-10 flex flex-col justify-center items-center border border-slate-400 ${b ? 'bg-blue-400' : ''}`}> {/* 백틱은 js문법이기때문에 jsx에서 쓰려면 중괄호써야함 */}
            <button className="flex justify-center items-center text-2xl w-1/4 m-3 p-5 border border-slate-400 rounded-md bg-slate-200">Blue</button>
            <button className="flex justify-center items-center w-1/3 m-3 p-5 bg-blue-200 border border-blue-500 rounded-md" onClick={handleBlue}>Blue Toggle</button>
        </div>
        <div className={`w-1/3 h-1/3 m-10 flex flex-col justify-center items-center border border-slate-400 ${o ? 'bg-orange-300' : ''}`}>
            <button className="flex justify-center items-center text-2xl w-1/4 m-3 p-5 border border-slate-400 rounded-md bg-slate-200">Orange</button>
            <button className="flex justify-center items-center w-1/3 m-3 p-5 bg-orange-200 border border-orange-500 rounded-md" onClick={handleOrange}>Orange Toggle</button>
        </div>
    </div>
  )
}
