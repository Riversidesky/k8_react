import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags] = useState(); // state변수는 useState Hook으로 만듬 [state변수, state변수값설정]
  const handleClick1 = () => {
    
    let arr = [];
    
    while(arr.length < 7) {
      let i = Math.floor(Math.random()*45) +1;
      if(!arr.includes(i)) {
        arr.push(i);
      }
    }
    
    const bns = arr.splice(6, 1)
    console.log(arr, bns)

    arr.sort((a, b) => a-b)
    console.log(arr)

    arr = arr.concat(bns)
    console.log(arr)
    
    let temp = arr.map(item => <TailBall key={'b'+item} n={item} />)
    temp.splice(6, 0, <span className="text-2xl font-bold mx-2 key=plus">+</span>)
    console.log(temp)
    setTags(temp)

        
}

// const handleClick2 = () => {
//     console.log('hc2')
// }


  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mb-8">
        {tags}
      </div>
      
      <div className="w-full flex justify-center items-center mb-8">  
        <TailButton caption = {'로또번호생성'} color='blue' handleClick={handleClick1}/>
        {/* <TailButton caption = '오렌지' color='orange' handleClick={handleClick2}/>
        <TailButton caption = {'핑크'} color='pink'/> */}
      </div>
    </div>
  )
}
