import TailButton from "../UI/TailButton" ;
import { useState, useEffect, useRef } from "react";
export default function Rest() {
  const url = "http://localhost:3005/posts"

  const getFetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json(); //비동기 동기

    setTd(data)
  }
  
  //입력값
  const txt1Ref = useRef();
  const txt2Ref = useRef();
  
  //화면 재렌더링 state
  const [td, setTd] = useState([]);
  const [tr, setTr] = useState([]);
  
  const [isUpdate, setIsUpdate] = useState(false);
  const [UpdateId, setUpdateId] = useState([]); 

  const Input = async() => {
    if(txt1Ref.current.value === '') {
      alert("제목을 입력하세요")
      txt1Ref.current.focus()
      return;
    }
    if(txt2Ref.current.value === '') {
      alert("작성자를 입력하세요")
      txt2Ref.current.focus()
      return;
    }

    //보낼 데이터
    const postData = { //object
      body : txt1Ref.current.value,
      author : txt2Ref.current.value,
    }

    //POST fetch
    const resp = await fetch(url, {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(postData)
    });

    const dt = await resp.json();
    console.log(dt)
    setTd([...td, dt]); // 원래 있던배열 가져오고 뒤에 dt추가
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';
    txt1Ref.current.focus();
  }

  //삭제
  const remove = async (id) => {
    await fetch(`${url}/${id}`, {
      method : 'DELETE'
    });

    console.log(id)
    setTd(td.filter(item => item.id !== id))
  }

  //수정
  const fix = (data) => {
    txt1Ref.current.value = data.body;
    txt2Ref.current.value = data.author;

    setIsUpdate(true);
    setUpdateId(data.id);
  }

  const Put = async () => {
    if(txt1Ref.current.value === '') {
      alert("제목을 입력하세요")
      txt1Ref.current.focus()
      return;
    }
    if(txt2Ref.current.value === '') {
      alert("작성자를 입력하세요")
      txt2Ref.current.focus()
      return;
    }

     //보낼 데이터 object로 만들기
     const postData = { 
      body : txt1Ref.current.value,
      author : txt2Ref.current.value
    }

    const resp = await fetch(`${url}/${UpdateId}`, {
      method : "PUT",
      headers : { 'CONTENT-TYPE' : 'application/json' },
      body : JSON.stringify(postData)
    });

    const data = await resp.json() ;
    console.log(data)

    const tm = td.map(item => item.id === UpdateId ? data : item);
    setTd(tm);

    setIsUpdate(false) ;
    setUpdateId('') ;
    txt1Ref.current.value = '' ;
    txt2Ref.current.value = '' ;
  }

  const OK = () => {
    if(!isUpdate) Input();
    else Put();
  }

  useEffect(() => {

    getFetchData();
    // fetch(url)
    //   .then(data => data.json())
    //   .then(data => setTd(data))
    //   .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(td)
    let tr = td.map(data => <tr key={data.id}>
                              <th className="text-center">{data.body}</th>
                              <th className="text-center">{data.author}</th>
                              <th className="text-center"><TailButton caption ="삭제" color = "pink" handleClick={()=>remove(data.id)} /></th> 
                              {/* 인수가 있을때는 콜백함수로 써야함 */}
                              <th className="text-center"><TailButton caption ='수정' color = "lime" handleClick={()=>fix(data)} /></th>
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
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref} />
        </div>
        <TailButton caption = {isUpdate ? "수정" : "입력"}
                  color = "blue"
                  handleClick = {OK} />  
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
