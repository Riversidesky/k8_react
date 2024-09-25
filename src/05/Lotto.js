import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"
import { useState } from "react";

export default function Lotto() {
  const handleClick1 = () => {
    let r = [];
    console.log('hc1')
    while(r.length < 7) {
      let j = Math.floor(Math.random()*45) +1;
      if(!r.includes(j)) {
        r.push(j);
      }
    }
    
}

const handleClick2 = () => {
    console.log('hc2')
}


  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mb-8">
        <TailBall n={1} />
        <TailBall n={2} />
        <TailBall n={3} />
        <TailBall n={4} />
        <TailBall n={5} />
        <TailBall n={6} />
        <TailBall n={7} />
      </div>
      
      <div className="w-full flex justify-center items-center mb-8">  
        <TailButton caption = {'로또번호생성'} color='blue' handleClick={handleClick1}/>
        {/* <TailButton caption = '오렌지' color='orange' handleClick={handleClick2}/>
        <TailButton caption = {'핑크'} color='pink'/> */}
      </div>
    </div>
  )
}
