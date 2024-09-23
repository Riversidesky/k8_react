 //rfc 탭 snippets익스텐션 html에서 !탭이랑 같은역할
import MyDiv2 from "./MyDiv2"



export default function MyDiv1() {
    const d1 = 'div1';
    const d2 = 'div2';
    const d3 = 'div3';

  return (
    <div className="w-5/6 h-4/6
                    flex flex-col justify-center items-center
                    text-2xl font-bold bg-fuchsia-800 text-white">
      <p className="w-full h-10 pl-6 flex justify-start items-center">{d1}</p>    
      <MyDiv2 dn1={d1} dn2={d2} dn3={d3}/>
    </div>
  )
}
