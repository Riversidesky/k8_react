import { useEffect, useState, useRef } from "react"
import BoxOfficeTr from "./BoxOfficeTr";

export default function BoxOffice() {
   const[td, setTd] = useState([]);  // useState = state변수 변하는거 감지
   const[tr, setTr] = useState([]);
   const[info, setInfo] = useState([]);

   const dtRef = useRef();

   //어제 날짜 구하기 함수
    const getYesterday = () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      const year = yesterday.getFullYear();
      let month = yesterday.getMonth() + 1;
      let day = yesterday.getDate();

      //월 2자리
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day; 
      return `${year}-${month}-${day}`;
    }


   const handleTrClick = (item) => {
    console.log(item)
    let tm = `[${item.movieCd}] ${item.movieNm} 개봉일 : ${item.openDt} 누적관객수 : ${parseInt(item.audiAcc).toLocaleString()}`
    setInfo(tm)
   }

  const getFetchData = (dt) => {
      const apiKey = process.env.REACT_APP_MV_KEY;
      // const dt = '20240925'

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

  const handleData = () => {
    getFetchData(dtRef.current.value.replaceAll('-', ''));
  }


  //맨처음 한번 실행 (배열안에 아무것도 없을때)
  useEffect(() => {
    const ydt = getYesterday();
    console.log(ydt)
    dtRef.current.value = ydt
    dtRef.current.max = ydt
    getFetchData(ydt.replaceAll('-', ''));
  }, []);
  
  //fetch 데이터가 채워지면 (배열안에값이 바뀔때마다 실행)
  useEffect(() => {
    console.log('td', td)
    let tm = td.map(item => <BoxOfficeTr mv = {item} key={item.movieCd} handleClick = {()=> handleTrClick(item)} />)
    setTr(tm)
  }, [td])
  

  return (
    <div className="w-2/4 h-screen flex flex-col justify-center items-center">
      <div className="w-full h-10 flex justify-between items-center">
        <div className="font-semibold text-xl">
          박스오피스
        </div>
        <div>
          <input type="date" id='dt' name='dt' ref={dtRef} onChange={handleData} />
        </div>
      </div>
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
        <tfoot>
          <tr>
            <td colSpan={5} className="bg-black text-white h-16 p-2 text-center">{info}</td>
          </tr>
        </tfoot>
      </table>
      {/* <div className="w-full h-16 flex justify-center items-center text-white bg-black">innterHTML</div> */}
    </div>
  )
}
