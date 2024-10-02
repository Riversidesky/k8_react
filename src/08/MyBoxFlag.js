import { useState, useEffect } from "react";

export default function MyBoxFlag({color}) {
  const firstc = color.charAt(0).toUpperCase()
  const upC = firstc+color.slice(1, color.length)


  const colorObj = {
    'blue' : {
        'bg400' : 'bg-blue-400',
        'border500' : 'border-blue-500',
        'bg200' : 'bg-blue-200'
    },
    'orange' : {
        'bg400' : 'bg-orange-400',
        'border500' : 'border-orange-500',
        'bg200' : 'bg-orange-200'
    },
    'yellow' : {
        'bg400' : 'bg-yellow-400',
        'border500' : 'border-yellow-500',
        'bg200' : 'bg-yellow-200'
    },
    'pink' : {
        'bg400' : 'bg-pink-400',
        'border500' : 'border-pink-500',
        'bg200' : 'bg-pink-200'
    }  
  }

  // const obj = colorObj[color];



  const [c, setC] = useState(false);
  const handleClick = () => {
    setC(!c)
    // console.log(obj[['bg400']])
  }


useEffect(()=>{

  }, [c]) 

  return (
        <div className={`w-4/5 h-4/5 m-10 flex flex-col justify-center items-center border border-slate-400 ${c ? colorObj[color]['bg400'] : ''}`}>
            <button className="flex justify-center items-center text-2xl w-1/2 m-3 p-5 border border-slate-400 rounded-md bg-slate-200">{upC}</button>
            <button className={`flex justify-center items-center w-1/3 m-3 p-5 ${colorObj[color]['bg200']} border ${colorObj[color]['border500']} rounded-md`} onClick={handleClick}>{upC} Toggle</button>
        </div>
  )
}
