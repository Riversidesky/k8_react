import { useEffect } from "react";
import TailButton from "../UI/TailButton"
import { AtomN } from "./AtomN";
import { AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from "recoil";

export default function RDiv3() {
    const [x, setX] = useRecoilState(AtomN);
    const y = useRecoilValue(AtomN2);

    const handleUp = () => {
        setX(x+1);
    }
    const handleDown = () => {
        setX(x-1);
    }

    // useEffect(()=> {
    //     setY(x*2);
    // }, [x])

    useEffect(() => {
        if (!localStorage.getItem('x')) 
            setX(0);
        else
            setX(parseInt(localStorage.getItem('x')))
    }, [setX])

    useEffect(() => {
        localStorage.setItem('x', x);
    }, [x])

    return (
      <div className="w-10/12 h-5/6 
                      flex flex-col justify-center items-center
                      bg-lime-400 text-lime-900 font-bold">
        <div className="w-full h-10 p-5
                        flex justify-start items-center ">
        
          RDiv3 : x = {x}, y = {y}
        </div>
        <div className="w-full grid grid-cols-2 gap-4 place-items-center">
        <TailButton caption='증가'
                    color='blue'
                    handleClick={handleUp}
                    size='w-1/2' />
        <TailButton caption='감소'
                    color='orange'
                    handleClick={handleDown}
                    size='w-1/2' />
        </div>
      </div>
    )
  }