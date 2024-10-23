import TailButton from "../UI/TailButton" ;
import { useState, useEffect, useRef } from "react";
export default function Rest() {
  const url = "http://localhost:3005/posts"

  const getFetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data)
  }

  const txt1Ref = useRef();
  const txt2Ref = useRef();

  const [td, setTd] = useState([]);
  const [tr, setTr] = useState([]);

  const Input = () => {

  }

  useEffect(() => {

    //getFetchData();
    fetch(url)
      .then(data => data.json())
      .then(data => setTd(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(td)
    let tr = td.map(data => <tr key={data.id}>
                              <th className="text-center">{data.body}</th>
                              <th className="text-center">{data.author}</th>
                              <th className="text-center"><TailButton caption ="삭제" color = "orange" handleClick='' /></th>
                              <th className="text-center"><TailButton caption ="수정" color = "lime" handleClick='' /></th>
                            </tr>
    )
    setTr(tr)
  }, [td])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            className="form-input  w-full"
            inRef={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            inRef={txt2Ref} />
        </div>
        <TailButton caption = "입력"
                  color = "blue"
                  handleClick = {Input} />  
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
          {tr}
        </tbody>
      </table>
    </div>
  )
}
