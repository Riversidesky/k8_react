import { useEffect, useState } from "react"
import BoxOfficeTr from "./BoxOfficeTr";

export default function BoxOffice() {
   const[td, setTd] = useState([]);
   const[tr, setTr] = useState([]);

   const handleTrClick = () => {
    
    
   }

  const getFetchData = () => {
      const apiKey = process.env.REACT_APP_MV_KEY;
      const dt = '20240928'

      let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
      url = `${url}key=${apiKey}&targetDt=${dt}`
      console.log('apiKey=', apiKey)
      console.log('url=', url)

      //데이터 가져오기
      fetch(url)
        .then(resp => resp.json()) // 데이터 json으로 보이게
        .then(data => setTd(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err))
  }


  //맨처음 한번 실행
  useEffect(() => {
    getFetchData();
  }, []);
  
  //fetch 데이터가 채워지면
  useEffect(() => {
    console.log('td', td)
    let tm = td.map(item => <BoxOfficeTr mv = {item} key={item.movieCd} handleClick = {()=> handleTrClick(item)} />)
    setTr(tm)
  }, [td])
  

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xl text-white uppercase bg-black">
            <tr>
                <th scope="col" className="px-6 py-3">
                    순위
                </th>
                <th scope="col" className="px-6 py-3">
                    영화명
                </th>
                <th scope="col" className="px-6 py-3">
                    매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    증감율
                </th>
            </tr>
        </thead>
        <tbody>
            {tr}
        </tbody>
    </table>
      </div>
      <div className="w-full h-16 flex justify-center items-center text-white bg-black">innterHTML</div>
    </div>
  )
}
