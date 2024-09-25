
export default function TailBall({n}) {
const ballColor = {
    'b0' : 'bg-red-700',
    'b1' : 'bg-orange-500',
    'b2' : 'bg-yellow-400',
    'b3' : 'bg-blue-500',
    'b4' : 'bg-pink-500',
    'b5' : 'bg-orange-500',
    'b6' : 'bg-yellow-400',
    'b7' : 'bg-blue-500',
    'b8' : 'bg-pink-500', 
    'b9' : 'bg-orange-500',

}
  return (
    <div className={`w-16 h-16
                    flex justify-center items-center
                    rounded-full
                    ${ballColor['b'+Math.floor(n/10)]} text-white text-2xl
                    font-bold
                    m-1`}>
        {n}
    </div>
  )
}
