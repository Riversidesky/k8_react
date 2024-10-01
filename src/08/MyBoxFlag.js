import { useState, useEffect } from "react";

export default function MyBoxFlag({color}) {
  const firstc = color.charAt(0).toUpperCase()
  const upC = firstc+color.slice(1, color.length)


  const colorObj = {
    'blue' : {
        'bg400' : 'bg-blue-400',
        'border500' : 'bg-blue-500',
        'bg200' : 'bg-blue-200'
    },
    'orange' : {
        'bg400' : 'bg-blue-400',
        'border500' : 'bg-orange-500'
    }
  }
  const [c, setC] = useState(false);
  const handleClick = () => {
    setC(!c)
  }


useEffect(()=>{

  }, [c]) 

  return (
        <div className={`w-1/3 h-1/3 m-10 flex flex-col justify-center items-center border border-slate-400 ${c ? colorObj['bg400'] : ''}`}>
            <button className="flex justify-center items-center text-2xl w-1/4 m-3 p-5 border border-slate-400 rounded-md bg-slate-200">{upC}</button>
            <button className={`flex justify-center items-center w-1/3 m-3 p-5 ${colorObj['bg200']} border ${colorObj['border500']} rounded-md`} onClick={handleClick}>{upC} Toggle</button>
        </div>
  )
}
