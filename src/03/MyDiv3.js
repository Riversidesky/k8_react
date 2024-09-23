

export default function MyDiv3({dn1, dn2, dn3}) {
  return (
    <div className="w-3/6 h-2/6
                    flex flex-col justify-center items-center
                    text-2xl font-bold bg-fuchsia-400 text-white">
      <p className="w-full h-10 pl-6 flex justify-start items-center">{`${dn1} > ${dn2} > ${dn3}`}</p>    
    </div>
  )
}
