
export default function BoxOfficeTr({mv, handleClick}) {
  const inten = () => {
    if (mv.rankInten > 0) return <><span className="text-red-600">↑</span><span>{mv.rankInten}</span></>
    else if(mv.rankInten == 0) return <span>-</span>
    else return <><span className="text-blue-600">↓</span><span>{mv.rankInten.substring(1)}</span></>
  }

  return (
    <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-200" onClick={handleClick}>
                <th scope="row" className="px-6 py-4 font-bold text-gray-900 text-center">
                    {mv.rank}
                </th>
                <td className="px-6 py-4">
                    {mv.movieNm}
                </td>
                <td className="px-6 py-4 text-right">
                    {parseInt(mv.salesAcc).toLocaleString()}원 {/* 쉼표 붙이기 - int처리 */}
                </td>
                <td className="px-6 py-4 text-right">
                    {parseInt(mv.audiAcc).toLocaleString()}명 
                </td>
                <td className="px-6 py-4 text-center">
                    {/* {inten()} */}
                    {mv.rankInten > 0 ? <span className="text-red-600">↑</span> : mv.rankInten < 0 ? <span className="text-blue-600">↓</span> : "-"}
                    {mv.rankInten != 0 && Math.abs(mv.rankInten)}
                </td>
    </tr>
  )
}
