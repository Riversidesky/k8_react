import MyDiv3 from "./MyDiv3"

// export default function MyDiv2(probs) {
export default function MyDiv2({dn1, dn2, dn3}) { // {}는 object 기호, console.log(probs)
  return (
    <div className="w-4/6 h-3/6
                    flex flex-col justify-center items-center
                    text-2xl font-bold bg-fuchsia-600 text-white">
      <p className="w-full h-10 pl-6 flex justify-start items-center">
                                            {/* {`${probs.dn1} > ${probs.dn2}`}</p>     */}
                                            {`${dn1} > ${dn2}`}</p>    
      {/* <MyDiv3 dn1 = {probs.dn1} dn2 = {probs.dn2} dn3 = {probs.dn3}/> */}
      <MyDiv3 dn1 = {dn1} dn2 = {dn2} dn3 = {dn3}/>
    </div>
  )
}
