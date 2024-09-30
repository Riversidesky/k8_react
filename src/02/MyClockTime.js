import { useState, useEffect } from "react";

function MyClockTime () {
    const [cTime, setCTime] = useState(new Date())

    useEffect(()=>{
        const tm =
        setInterval(()=>{
            setCTime(new Date())
        }, 1000) //1초에 한번씩

        return () => clearInterval(tm);
    }, []);

    // let today = new Date();
    // today = today.toLocaleTimeString();

    // return (
    //     <p className="text-4xl text-blue-400">현재 시각 : {today}</p>
    return (
        <div className="w-full flex justify-center items-center text-2xl font-bold">
            {cTime.toLocaleTimeString()}
        </div>
    );
}

export default MyClockTime;