import FoodData from './fooddata.json'
import FoodCard from './FoodCard'
import { useState } from 'react';
import TailButton from '../UI/TailButton';

export default function FoodMain() {
  const [tags, setTags] = useState() ;

  //운영주체 분류를 중복 제거하여 버튼으로 만들기
  let tm = FoodData.map(item => item["운영주체 분류"].replace(' ', ''))
  tm = [...new Set(tm)] //tm에서 중복제거
  console.log(tm)

  const bts = tm.map(item => <TailButton
                        key = {item} 
                        caption = {item}
                        color = 'blue'
                        handleClick={()=>handleFood(item)}
                        /> )
  
  

  const handleFood = (item) => {
    let tm = FoodData.filter(i => i["운영주체 분류"].replace(' ', '') === item).map(i => <FoodCard obj={i} key={i.사업장명}/>)
    // tm = tm.map(i => <FoodCard 
    //                   obj={i} key={i.사업장명}
    //                   />)
    setTags(tm)
    console.log(tm)
  }

  
  return (
    <div className='w-full flex flex-col justify-start h-screen'>
      <div className='w-full h-24 flex justify-center items-center bg-blue-300'>
        {bts}
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4 m-2'>
        {tags}
      </div>
    </div>
  )
}
