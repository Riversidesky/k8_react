

export default function TailButton({caption, color, handleClick}) {
  const btColor = {
    'blue' : 'bg-blue-600',
    'orange' : 'bg-orange-600',
    'pink' : 'bg-pink-600',
    'lime' : 'bg-lime-600'
  };

  const btColorHover = {
    'blue' : 'hover:bg-blue-800',
    'orange' : 'hover:bg-orange-800',
    'pink' : 'hover:bg-pink-800',
    'lime' : 'hover:bg-lime-800'
  }
  return (
    <button className={`inline-flex justify-center
                        p-4 mx-2
                        ${btColor[color]} text-white font-bold
                        rounded-xl
                        ${btColorHover[color]}`}
            onClick={handleClick} >
      {caption}
    </button>
  )
}
