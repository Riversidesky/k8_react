
import RDiv2 from "./RDiv2" ;
import RDiv3 from "./RDiv3";
import { AtomN } from "./AtomN";
import { AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";


export default function RDiv1() {
  //const [x,] = useRecoilState(AtomN); //setX안씀
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);

  return (
    <div className="w-4/6 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-800 text-white font-bold">
      <div className="w-full h-10 p-5 m-2
                      flex justify-start items-center ">
      RDiv X={x} Y={y}
      </div>
      <div className="w-full grid grid-cols-2 gap-4 place-items-center">
        <RDiv2 />
        <RDiv2 />
      </div>  
      <div className="w-full h-1/2 flex justify-center items-center">
        <RDiv3 /> 
      </div>
    </div>
  )
}