import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import { useState } from 'react'

export default function FoodCard({obj}) {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(!isShow); // isShow값을 바꿈
    }

        // const obj = {
        //     "구분": "광역지원센터",
        //     "시군구": "부산시",
        //     "사업장명": "부산광역푸드뱅크",
        //     "신고기준": "당연",
        //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
        //     "연락처(대표번호)": "051-791-1377",
        //     "팩스번호": "051-714-3096",
        //     "운영주체 분류": "1. 사회복지법인",
        //     "운영주체명": "부산광역시사회복지협의회"
        // }

    const objimg = {
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market
    }

    return (
    <div className='w-full flex border-slate-500 rounded-md p-5' >
        <div className='w-1/3 flex justify-start items-start' >
            {/* <img src={obj["구분"] === '광역지원센터' ? busan :
                obj["구분"] === '기초푸드뱅크' ? bank : market
            } alt="부산" /> */}
            <img src={objimg[obj["구분"]]} alt={obj["구분"]} /> {/*obj 이해 */}
        </div>
        <div className='w-2/3 flex flex-col justify-between items-start pl-4'>
            <div>
                <div className='text-2xl font-bold'>{obj.사업장명}</div>
                <div className='text-base font-semibold'>{obj.운영주체명}</div>
                <div className='text-xs text-slate-500'>{obj["사업장 소재지"]}</div> {/*공백 있으면 obj.으로 못씀*/}
            </div>    
            <div className='w-full h-8 p-2 flex justify-end items-center bg-slate-600 text-white'
                            onClick={handleClick}>
                                {/* {isShow ? obj["연락처(대표번호)"] : ''} */}
                                {isShow && obj["연락처(대표번호)"]}                                
                                </div>
        </div>
    </div>
    
)
}
