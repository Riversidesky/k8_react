import { useState } from "react"; // useState - 값 바뀐거 갱신시켜주는 Hook

// 이미지 파일은 index.html 파일과 같이 있어야함

export default function MyListItem({title, content, imgUrl}) {
    const [n, setN] = useState(0); // n의 초기값 0
    const heart = () => {
        setN(n + 1); // n = n+1 이라는뜻 비동기
        console.log(n)
    }
    return (
        <div className='w-full
                        border border-gray-400
                        flex justify-center items-center'>
            <div className='w-1/3 flex justify-start items-start p-2'>
                <img src={imgUrl} alt={title} /> 
            </div>
            <div className='w-2/3 h-full flex-col justify-between items-center'>
                <div className="flex-col h-3/4">
                    <div className="text-xl font-bold flex text-center justify-start py-2">
                        {title}
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
                <div className="flex h-1/4 justify-end items-end pr-2">
                    <span className="cursor-pointer"
                        onClick={heart}>
                    💜</span>
                    <span className="text-indigo-400 font-extrabold mr-2">PURPLE YOU</span>
                    <span className="font-bold">{n}</span>
                </div>
            </div>
        </div>

    )
}
